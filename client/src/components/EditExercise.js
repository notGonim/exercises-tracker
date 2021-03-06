import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'
import { useParams } from 'react-router';


export const EditExercise = () => {

    const [username, setUsername] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState(0)
    const [users, setUsers] = useState([])
    const [startDate, setStartDate] = useState(new Date());
    const { id } = useParams()


    useEffect(() => {
        axios.get(`http://localhost:5000/exercises/${id}`)
            .then(response => {
                this.setState({
                    username: username,
                    description: description,
                    duration: duration,
                    date: new Date(response.data.date)
                })
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/user/')
            .then(response => {
                if (response.data.length > 0) {
                    setUsers(response.data.map(user => user.username))
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id])


    const onSubmit = (e) => {
        e.preventDefault();

        const exercise = {
            username: username,
            description: description,
            duration: duration,
            date: startDate
        }

        axios.post(`http://localhost:5000/exercises/update/${id}`,  )
            .then(res => console.log(res.data));


    }


    return (
        <div>
            <h3>Edit Exercise Log</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <select ref="userInput"
                        required
                        className="form-control"
                        value={username}
                        onChange={(e) => { setUsername(e.target.value) }}>
                        {
                            users.map(function (user) {
                                return <option
                                    key={user}
                                    value={user}>{user}
                                </option>;
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Duration (in minutes): </label>
                    <input
                        type="text"
                        className="form-control"
                        value={duration}
                        onChange={(e) => { setDuration(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker selected={startDate}
                            onChange={date => setStartDate(date)} />
                    </div>
                </div>

                <div className="form-group">
                    <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}
