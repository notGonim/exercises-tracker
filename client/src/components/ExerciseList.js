import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Exercise = (props) => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0, 10)}</td>
        <td>
            <Link to={"/edit/" + props.exercise._id}>edit</Link>
        | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>

        </td>
    </tr>
)



export const ExerciseList = () => {

    const [exercises, setExercises] = useState([])


    useEffect(() => {
        axios.get('http://localhost:5000/exercises/')
            .then(response => {
                setExercises(response.data)
                console.log(exercises)
            })
            .catch((error) => {
                console.log(error);
            })
    })

    const deleteExercise = () => {

    }

    const exerciseList = () => {
        return exercises.map(currentexercise => {
            return <Exercise exercise={currentexercise} deleteExercise={deleteExercise} key={currentexercise._id} />;
        })
    }

    return (
        <div>
            <br /> <br />
            <h3>Logged Exercises</h3>
            <br />
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {exerciseList()}
                </tbody>
            </table>
        </div>
    )
}
