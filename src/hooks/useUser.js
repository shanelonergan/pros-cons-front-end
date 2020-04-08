import {useReducer} from 'react'
import API from '../config/API'

const userReducer = (state, {type, payload}) => {

    switch (type) {
        case 'LOGIN':
            const {token, user_id} = payload
            localStorage.setItem('loggedInUserId', user_id)
            localStorage.setItem('token', token)
            return {...state, token, loggedInUserId: user_id, error: null}
        case 'LOGOUT':
            localStorage.clear()
            return {loggedInUserId: null, token: null, username: null, email: null}
        case "SET":
            return {...state, token: payload.token, loggedInUserId: payload.user_id}
        case "GET":
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
        prompt: {}
    }

    const login = (userObj, slug) => {
        fetch(`${API}/${slug.toLowerCase()}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userObj)
        })
        .then(res => res.json())
        .then(authObj => {
            if (authObj.errors) {
                console.log(authObj)
                dispatch({type: "ERROR", payload: authObj})
            } else {
                window.history.pushState({urlPath:'/'}, "Home", "/")
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