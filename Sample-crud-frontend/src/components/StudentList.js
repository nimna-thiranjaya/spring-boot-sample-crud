import {useState,useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom';
import React,{Component} from "react";
import studentService from '../service/student.service';
import 'bootstrap/dist/css/bootstrap.min.css'
import {toast} from 'react-toastify';


function StudentList() {
  const [students, setStudents] = useState([]);

  const init = () => {
    studentService.getAll()
      .then(response => {
        console.log('Printing student data', response.data);
        setStudents(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }

  useEffect(() => {
    init();
  }, []);


  const handleDelete = (id) => {
    console.log('Printing id', id);
    studentService.remove(id)
      .then(response => {
        alert('student deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (
    // <div className="container">
    // <br/>
    // <Link to="/add" className="btn btn-primary mb-2">Student Registration</Link><br/><br/>

    // <div class="card text-center">
    //   <div class="card-header">
    //   <h3>List of students</h3>
    //   <hr/>
    //   </div>
    //   <div class="card-body">
    //     <div class="row">
    //    {
    //       students.map(student => (
            
    //           <div class="col-sm-2">
    //             <div class="card">
    //               <div class="card-body">
    //                 <center><h5 class="card-title">{student.name}</h5></center>
    //                 <p class="card-text">ID : {student.id}<br/>Name : {student.name}<br/>Address : {student.address}</p>
    //                 <Link className="btn btn-info" to={`/edit/${student.id}`}>Update</Link>&nbsp; <button type="button" class="btn btn-danger" onClick={() => {
    //                       handleDelete(student.id);
    //                     }}>Delete</button>
    //               </div>
    //             </div>
    //             <br/><br/>
    //           </div>
             
    //       ))
    //     }
    //      </div>
    //   </div>
    // </div>
    <div className='container'>
      <br/><br/>
      <Link to="/add" className="btn btn-primary mb-2">Student Registration</Link>
    <h3>List of students</h3>
    <hr/>
    <div>
      <table className="table table-bordered" style={{width:50+"%"}}>
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {
          students.map(student => (
            <tr>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.address}</td>
              <tr>&nbsp;&nbsp;<Link className="btn btn-info" to={`/edit/${student.id}`}>Update</Link>&nbsp; <button type="button" class="btn btn-danger" onClick={() => {
                    handleDelete(student.id);
                  }}>Delete</button></tr>
            </tr>
          ))
        }
        </tbody>
      </table>
      
    </div>
    
    {/* <div class="row">
       {
          students.map(student => (
            
              <div class="col-sm-2">
                <div class="card">
                  <div class="card-body">
                    <center><h5 class="card-title">{student.name}</h5></center>
                    <p class="card-text">ID : {student.id}<br/>Name : {student.name}<br/>Address : {student.address}</p>
                    <Link className="btn btn-info" to={`/edit/${student.id}`}>Update</Link>&nbsp; <button type="button" class="btn btn-danger" onClick={() => {
                          handleDelete(student.id);
                        }}>Delete</button>
                  </div>
                </div>
                <br/><br/>
              </div>
             
          ))
        }
         </div> */}
  

  </div>
  );
}




export default StudentList;
