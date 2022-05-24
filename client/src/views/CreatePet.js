import React, {useState} from "react";
import axios from 'axios';
import {useHistory} from "react-router-dom";

const CreatePet = (props) => {
    const history = useHistory();
    const [form, setForm] = useState({
        petName: "",
        type: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: "",
        likes: 0
    })

    const [errors, setErrors] = useState({});


    const onChangeHandler = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
 
        })
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault();

        axios.post("http://localhost:8000/api/pets/new", form)
            .then(res => {
                history.push("/");
            })
            .catch(err=> {
                 setErrors(err.response.data.err.errors);
            })
            
    }

    return (
        <div>
            <h3>Know a pet needing a home?</h3>
            <form onSubmit= {onSubmitHandler} className="w-50 d-block mx-auto my-3 p-5">
            <div className="form-group">
                    <label htmlFor="petName">Pet Name:</label>
                    <input onChange={onChangeHandler} type="text" name='petName' className="form-control"/>
                    <span className = "alert-danger">{errors.petName && errors.petName.message}</span>
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="type">Pet Type:</label>
                    <input onChange={onChangeHandler} type="text" name='type' className="form-control"/>
                    <span className = "alert-danger">{errors.type && errors.type.message}</span>
                 </div>

                <div className="form-group mt-3">
                    <label htmlFor="description">Pet Description:</label>
                    <input onChange={onChangeHandler} type="text" name='description' className="form-control"/>
                    <span className = "alert-danger">{errors.description && errors.description.message}</span>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="skill1">Skill 1:</label>
                    <input onChange={onChangeHandler} type="text" name='skill1' className="form-control"/>
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="skill2">Skill2:</label>
                    <input onChange={onChangeHandler} type="text" name='skill2' className="form-control"/>
                 </div>

                <div className="form-group mt-3">
                    <label htmlFor="skill3">Skill3:</label>
                    <input onChange={onChangeHandler} type="text" name='skill3' className="form-control"/>
                </div>

                <input type="submit" value="Add Pet" className="btn btn-lg btn-success mt-3"/>

            </form>
        </div>
    )
}

export default CreatePet;
