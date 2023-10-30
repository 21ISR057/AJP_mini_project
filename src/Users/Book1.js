import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Book1() {

    let navigate=useNavigate()

    const [users, setUsers] = useState({
        name:"",
        mail:"",
        ph:"",
        arive:"",
        depart:"",
        room:"",
        bed:""
    });
const{name,mail,ph,arive,depart,room,bed}=users

const OnSetName=(e)=>{
setUsers({...users,[e.target.name]:e.target.value})
}

const onSubmit = (event) => {
    event.preventDefault();
    console.log(name,mail,ph,arive,depart,room,bed);   
     axios
      .post("http://localhost:8080/add-user", { name,mail,ph,arive,depart,room,bed})
      .then((response) => {
        navigate("/book")
        // console.log(response.data);
      });
  };

  return (
   <div className="container">
    <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Book</h2>
          <form onSubmit={(e)=> onSubmit(e)}>

          
            <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                    Name
                </label>
                <input
                type={"text"}
                className="form-control"
                name="name"
                value={name}
                onChange={(e)=>OnSetName(e)}
            />
            </div>
            <div className="mb-3">
                <label htmlFor="Mail" className="form-label">
                    Mail
                </label>
                <input
                type={"text"}
                className="form-control"
                name="mail"
                value={mail}
                onChange={(e)=>OnSetName(e)}
            />
            </div>
            <div className="mb-3">
                <label htmlFor="Ph" className="form-label">
                    Phone
                </label>
                <input
                type={"number"}
                className="form-control"
                name="ph"
                value={ph}
                onChange={(e)=>OnSetName(e)}
            />
            </div>
            <div className="mb-3">
                <label htmlFor="arival" className="form-label">
                    Arival
                </label>
                <input
                type={"text"}
                className="form-control"
                name="arive"
                value={arive}
                onChange={(e)=>OnSetName(e)}
            />
            </div>
            <div className="mb-3">
                <label htmlFor="depart" className="form-label">
                    Depature
                </label>
                <input
                type={"text"}
                className="form-control"
                name="depart"
                value={depart}
                onChange={(e)=>OnSetName(e)}
            />
            </div>
            <div className="mb-3">
                <label htmlFor="room" className="form-label">
                    Room
                </label>
                <input
                type={"text"}
                className="form-control"
                name="room"
                value={room}
                onChange={(e)=>OnSetName(e)}
            />
            </div>
            <div className="mb-3">
                <label htmlFor="bed" className="form-label">
                    Bed
                </label>
                <input
                type={"text"}
                className="form-control"
                name="bed"
                value={bed}
                onChange={(e)=>OnSetName(e)} 
            />
            </div>
            <button type='submit' className='btn btn-outline-primary'>Submit</button>
            <Link className='btn btn-outline-danger mx-2' to="/">Cancel
            </Link>
             </form>
        </div>
    </div>
   </div>
  )
}

export default Book1