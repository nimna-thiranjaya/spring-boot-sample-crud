import { useState } from "react"
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import React,{Component} from "react";
import studentService from "../service/student.service";


const AddStudent = () => {
    const[name, setName] = useState('');
    const[address, setAddress] = useState('');
    const history = useHistory();
    const {id} = useParams();

    const saveStudent = (e) => {
        e.preventDefault();
        
        const student = {name, address, id};
        if (id) {
            //update
            studentService.update(student)
                .then(response => {
                    alert("student updated successfully", response.data);
                    history.push('/home');
                })
                .catch(error => {
                    console.log('somthing went wrong', error);
                }) 
        } else {
            //create
            studentService.create(student)
            .then(response => {
                alert("student added successfully", response.data);
                history.push("/home");
            })
            .catch(error => {
                console.log('something went wroing', error);
            })
        }
    }

    useEffect(() => {
        if (id) {
            studentService.get(id)
                .then(student => {
                    setName(student.data.name);
                    setAddress(student.data.address);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    return(
        <div className="container">
            <h3>Add Student</h3>
            <hr/>
            <form>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="department"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter Address"
                    />

                </div>
                <div >
                    <button onClick={(e) => saveStudent(e)} className="btn btn-primary">Save</button> <Link to="/home" className="btn btn-primary mb-2">Back</Link>
                </div>
            </form>
            
         
        </div>
    )
}

export default AddStudent;
