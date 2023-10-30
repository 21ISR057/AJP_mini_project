import React, { useEffect } from 'react';  
import axios from "axios";
import { useState } from "react";
import { Link } from 'react-router-dom';

function Book() {
  const [users, setUsers] = useState([]);
  // const [name, setName] = useState("");
  // const [mail, setEmail] = useState("");
  // const [ph, setPh] = useState(0);
  // const [arive, setArive] = useState("");
  // const [deprt, setDepart] = useState("");
  // const [room, setRoom] = useState("");
  // const [bed, setBed] = useState("");

  // useEffect (() =>
  // {
  //   console.log("hello");
  // });
  useEffect(() => {
    axios.get("http://localhost:8080/users").then((response) => {
      setUsers(response.data);
    });
  }, [users]);

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   console.log(name,mail,ph,arive,deprt,room,bed);

  //   axios
  //     .post("http://localhost:8080/add-user", { name,mail,ph,arive,deprt,room,bed })
  //     .then((response) => {
  //       console.log(response.data);
  //     });
  // };

  const deleteHandler = (id) => {
    axios.delete(`http://localhost:8080/delete-user/${id}`).then((response) => {
      alert(response.data);
    });
   };

  return (
    <>
   
<div className="container">
  <div className="py-4">
    <table className="table border shadow">
      <thead>
        <tr>
        <th scope="col">ID</th> 
          <th scope="col">Name</th>
          <th scope="col">Mail</th>
          <th scope="col">Phone</th>
          <th scope="col">Arival</th>
          <th scope="col">Depature</th>
          <th scope="col">Room</th>
          <th scope="col">Bed</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((users,index)=>(
            <tr>
            <th scope="row" key={index}>{index+1}</th>
            {/* <td>{users.id}</td> */}
            <td>{users.name}</td>
            <td>{users.mail}</td>
            <td>{users.ph}</td>
            <td>{users.arive}</td>
            <td>{users.depart}</td>
            <td>{users.room}</td>
            <td>{users.bed}</td>
             <td>
              <Link className="btn btn-primary mx-2" to={`/viewuser/${users.id}`}>View</Link>
              <Link className="btn btn-outline-primary mx-2" to={`/updateuser/${users.id}`}>Upadte</Link>
              <button className="btn btn-danger mx-2"
              onClick={()=>deleteHandler(users.id)} 
              >Delete</button>
             </td>
          </tr>
          ))
        }
       
      </tbody>
    </table>
  </div>
</div>
    </>
  );
}

export default Book;