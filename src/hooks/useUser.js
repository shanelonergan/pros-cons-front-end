import {useReducer} from 'react'
import API from '../config/API'

const userReducer = (state, {type, payload}) => {

    switch (type) {
        case 'LOGIN':
            console.log('LOGIN hit', payload)
            const {token, user} = payload
            localStorage.setItem('loggedInUserId', user.id)
            localStorage.setItem('token', token)
            return {...state, token, loggedInUserId: user.id, error: null}
        case 'LOGOUT':
            localStorage.clear()
            return {loggedInUserId: null, token: null, username: null, email: null}
        case "SET":
            return {...state, token: payload.token, loggedInUserId: payload.user_id}
        case "GET":
            console.log('GET hit', payload)
            const {username, email} = payload
            return {...state, username, email}
        case "EDIT": {
            const {email} = payload
            return {...state, email}
        }
        case "ERROR":
            const {errors} = payload
            return {...state, error: errors[0]}
        default:
            throw new Error("Undefined User Dispatch Action")
    }
}

const useUser = () => {
    const initialState = {
        loggedInUserId: null,
        token: "",
        username: "",
        email: ""
    }

    const login = (userObj) => {
        console.log('hit login')
        fetch(`${API}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userObj)
        })
        .then(res => res.json())
        .then(authObj => {
            if (authObj.errors) {
                console.log(authObj, "hit errors")
                dispatch({type: "ERROR", payload: authObj})
            } else {
                console.log(authObj, 'no errors')
                dispatch({type: "LOGIN", payload: authObj})
            }
        })
    }

    const getUserData = (userId, token) => {
        if (userId) {
        fetch(`${API}/users/${userId}`, {
            headers: {"Authorization": token }
        })
        .then(res => res.json())
        .then(userObj => dispatch({type: 'GET', payload: userObj}))
        } else {
            // render something
            console.log("Nope")
        }
    }

    const [state, dispatch] = useReducer(userReducer, initialState)

    return [state, dispatch, login, getUserData]
}

export default useUser
