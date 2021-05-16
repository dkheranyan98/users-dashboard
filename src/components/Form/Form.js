import './Form.css'
import HeaderTab from './../Tab/HeaderTab';
import imageUpload from "./../../icons/imageUpload.svg";
import { useSelector, useDispatch } from 'react-redux';
import { toggleUser, setEdit } from './../../store/actions';
import { useState } from 'react';

const Form = () => {
    const dispatch = useDispatch()
    const checkedUser = useSelector((state) => state.global.checkedUser);
    const users = useSelector((state) => state.global.users);
    let userToEdit = []
    if(checkedUser) {
        userToEdit = users.find(user => user.id === checkedUser);
    }
    const [user, setUser] = useState(userToEdit);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    let url = `https://brainstorm-interview-task.herokuapp.com/users`
    let method = "POST"
    if(userToEdit.length) {
        url = `${url}/${user.id}`
        method = "PUT"
    }
    const handleOnSubmit = () => {
        fetch(url, {
            method: method,
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.error) {
                    throw response.error
                }
                dispatch(setEdit(null));
                dispatch(toggleUser(null));
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className='form_containter'>
        <HeaderTab />
        <div className='form'>
            <input 
                type='text' 
                name='name'
                placeholder='User name' 
                value={user ? user.name : ''}
                onChange={handleChange}
            />
            <div>
                <label htmlFor="upload-photo" >
                    <img src={imageUpload} alt=''/>
                    Photo
                </label>
                <input type="file" name="photo" id="upload-photo"/>
            </div>
            <input 
                name='email'
                type='email' 
                placeholder='Email' 
                value={user ? user.email : ''}
                onChange={handleChange}
            />
            <input 
                name='location'
                type='text' 
                placeholder='Location' 
                value={user ? user.location : ''}
                onChange={handleChange}
            /> 
            <button onClick={() => handleOnSubmit()}> Save </button>
        </div>
        </div>
    )
}

export default Form;