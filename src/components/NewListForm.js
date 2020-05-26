import React, {useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, FormField, TextInput, Button } from 'grommet'
import { Checkmark } from 'grommet-icons'
import { UserContext } from '../UserContext'
import API from '../config/API'

const  NewListForm = ({setShowNewList}) => {
    const history = useHistory()
    const [userState] = useContext(UserContext)
    const [listName, setListName] = useState('')

    function createNewList() {
		const userId = +userState.loggedInUserId
		const data = { name: listName, user_id: userId }
		console.log('data:', data)
		const config = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}

		fetch(API + '/lists', config)
		.then(res => res.json())
		.then(listObj => {
            console.log(listObj)
            setShowNewList(false)
            history.push('/lists/' + listObj.id)
        })
	}

	return (
		<Box pad='medium' gap='small' width='medium' height='auto'>
			<FormField>
				<Box direction='row'>
					<TextInput
						id='name-input'
						placeholder='New List'
						value={listName}
						onChange={(event) => setListName(event.target.value)}
						plain
					/>
					<Button icon={<Checkmark />} onClick={createNewList} />
				</Box>
			</FormField>
		</Box>
	)
}

export default NewListForm
