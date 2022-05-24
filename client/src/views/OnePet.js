import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const OnePet = (props) => {
    const { _id } = useParams()
    const [pets, setPets] = useState([]);
    const history = useHistory();

    useEffect(() => {
        // console.log("use effect is running for the char" + props.id);
        axios.get("http://localhost:8000/api/pets/" + _id)
            .then(res => {
                setPets(res.data);
            })
            .catch(err => console.log("Uh oh, no pet!"))
    }, [_id])

    const onDeleteHandler = () => {
        if (window.confirm(`Are you sure you want to adopt ${pets.title}?`)) {
            axios.delete(`http://localhost:8000/api/pets/${_id}/delete`)
                .then(res => {
                    history.push("/");
                })
        }
    }

    const onLikesClickHandler = () => {
        pets.likes = pets.likes +1;
        console.log(pets.likes);

        axios.patch(`http://localhost:8000/api/pets/${_id}/update`, pets.likes)
        .then(res => {
            history.push("/");
        })
        return (
            document.getElementById("likesButton").disabled = true
            

        )
    }

    return (
        <div className='pets'>
            <h1>Pet Shelter</h1>
            <h3>Details about {pets ? pets.petName : ""}</h3>
            <p><span>Pet Type:</span> {pets ? pets.type : ""} </p>
            <p><span>Description:</span> {pets ? pets.description : ""} </p>
            <p><span>Skill 1:</span> {pets ? pets.skill1 : ""} </p>
            <p><span>Skill 2:</span> {pets ? pets.skill2 : ""} </p>
            <p><span>Skill 3:</span> {pets ? pets.skill3 : ""} </p>

            <div>
                <p>{pets.likes} likes(s)</p>
                <button onClick={onLikesClickHandler} id="likesButton" className="btn btn-lg btn-success">Like {pets ? pets.petName : ""}!</button>
                <button onClick={onDeleteHandler} className="btn btn-lg btn-danger">Adopt {pets ? pets.petName : ""}!</button>
            </div>

        </div>
    )
}

export default OnePet;