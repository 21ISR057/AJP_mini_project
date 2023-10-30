import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'

function View() {
    const [users, setUsers] = useState({
        name:"",
        mail:"",
        ph:"",
        arive:"",
        depart:"",
        room:"",
        bed:""
    });

    const { id }=useParams();
    useEffect(() => {
        loadUser();
      }, []);
    
      const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/get-user/${id}`);
        setUsers(result.data);
      };
  return (
    <div className="container">
       <div className="row">
       <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        
        <h2 className="text-center m-4">User Details</h2>
        <div className='card'>
            <div className='card-header'>
                Details of user id:
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Name:</b>
                        {users.name}
                    </li>
                    <li className='list-group-item'>
                        <b>Mail:</b>
                        {users.mail}
                    </li>
                    <li className='list-group-item'>
                        <b>Phone no:</b>
                        {users.ph}
                    </li>
                    <li className='list-group-item'>
                        <b>Arival date:</b>
                        {users.arive}
                    </li>
                    <li className='list-group-item'>
                        <b>Depature date:</b>
                        {users.depart}
                    </li>
                    <li className='list-group-item'>
                        <b>Room:</b>
                        {users.room}
                    </li>
                    <li className='list-group-item'>
                        <b>Bed:</b>
                        {users.bed}
                    </li>
                </ul>
            </div>
        </div>
        <Link className='btn btn-primary my-2' to={"/book"}>Back to detalis</Link>
        </div> 
        </div>
    </div>
  )
}

export default View
