import React, {useState, useEffect} from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';

const EditPet = (props) => {
    const { _id } = useParams();
    const [form, setForm] = useState({
        petName: "",
        type: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: ""
    })

    const[errors,setErrors] = useState({});
    const history = useHistory();

    const onChangeHandler = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
 
        })
    }

    useEffect(()=>{
        // console.log("use effect is running for the char" + props.id);
        axios.get("http://localhost:8000/api/pets/" + _id )
            .then(res => {
                setForm(res.data);
            })
            .catch(err=>console.log("Uh oh, no pet!"))
    },[_id])

    //ToDo:  Fix to edit; not to create
    const onSubmitHandler = (e) =>{
        e.preventDefault();

        axios.patch(`http://localhost:8000/api/pets/${_id}/update`, form)
            .then(res => {
                history.push("/");
            })
            .catch(err=> {
                setErrors(err.response.data.err.errors);
            })
    }

    return (
        <div>
            <form onSubmit= {onSubmitHandler} className="w-50 d-block mx-auto my-1 p-5">
            <h3>Edit {form.petName}</h3>
            <div className="form-group">
                    <label htmlFor="petName">Pet Name:</label>
                    <input value={form.petName} onChange={onChangeHandler} type="text" name='petName' className="form-control"/>
                    <span className = "alert-danger">{errors.petName && errors.petName.message}</span>
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="type">Pet Type:</label>
                    <input value={form.type} onChange={onChangeHandler} type="text" name='type' className="form-control"/>
                    <span className = "alert-danger">{errors.type && errors.type.message}</span>
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="description">Description:</label>
                    <input value={form.description} onChange={onChangeHandler} type="text" name='description' className="form-control"/>
                    <span className = "alert-danger">{errors.description && errors.description.message}</span>
                 </div>

                 <div className="form-group mt-3">
                    <label htmlFor="skill1">Skill 1:</label>
                    <input value={form.skill1} onChange={onChangeHandler} type="text" name='skill1' className="form-control"/>
                    <span className = "alert-danger">{errors.skill1 && errors.skill1.message}</span>
                 </div>

                 <div className="form-group mt-3">
                    <label htmlFor="skill2">Skill 1:</label>
                    <input value={form.skill2} onChange={onChangeHandler} type="text" name='skill2' className="form-control"/>
                    <span className = "alert-danger">{errors.skill2 && errors.skill2.message}</span>
                 </div>

                 <div className="form-group mt-3">
                    <label htmlFor="skill3">Skill 3:</label>
                    <input value={form.skill3} onChange={onChangeHandler} type="text" name='skill3' className="form-control"/>
                    <span className = "alert-danger">{errors.skill3 && errors.skill3.message}</span>
                 </div>

                <input type="submit" value="Edit Pet" className="btn btn-lg btn-success mt-3"/>

            </form>
        </div>

    )
}

export default EditPet;