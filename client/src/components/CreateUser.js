import React, { useState } from 'react'
import axios from "axios"
import { useHistory } from "react-router-dom";


export const CreateUser = () => {
    const history = useHistory()
    const [userName, setUsername] = useState('')

    const onSubmit =  (e) => {

        e.preventDefault();

        const user = {
            username: userName,
        }

        axios.post('http://localhost:5000/user/add', user)
            .then(res => console.log(res.data));
        setUsername('')
        history.push('/')
    }

    return (
        <div>
            <br />
            <h3>Create New User</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={userName}
                        onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="submit" value="Add User" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}
