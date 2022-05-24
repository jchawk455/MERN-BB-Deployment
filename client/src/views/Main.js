import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import {useHistory} from "react-router-dom";

const Main = (props) => {
    const [pets, setPets] = useState([]);
    const history = useHistory();
    useEffect(()=> {
        axios.get("http://localhost:8000/api/pets/all")
            .then(res=>{
                // console.log(res);
                setPets(res.data);
            })
            .catch(err=>console.log(err))
    },[pets])

    const onDeleteHandler = (_id) => {
        if(window.confirm(`Are you sure you want to adopt ${pets.petName}?`)){
            axios.delete(`http://localhost:8000/api/pets/${_id}/delete`)
                .then(res=>{
                    history.push("/");
                })
        }
    }

    return (
        <div className="container w-75 d-flex justify-content-center" >
            <table className="table table-striped w-auto">
                <thead>
                    {/* <th><h3>ID</h3></th> */}
                    <th><h3>Name</h3></th>
                    <th><h3>Type</h3></th>
                    <th><h3>Actions</h3></th>
                </thead>
                <tbody>
                {
                    pets
                    .sort( (a,b) => a.type > b.type ? 1 : -1)
                    .map((pet,i)=>{
                        return <tr key={pet._id}>
                        {/* <td>key={pet._id}</td> */}
                        <td><Link to={`/pets/${pet._id}`}>{pet.petName}</Link></td> 
                        <td>{pet.type}</td>
                        <td><Link to={`/pets/${pet._id}`}>details</Link></td>
                        <td><Link to={`/pets/${pet._id}/editPet`}>edit</Link></td>
                        </tr>
                    })
                }
                </tbody>
            </table>

         </div>
    )
}

export default Main;