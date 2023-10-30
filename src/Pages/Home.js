
import React from 'react'
import { NavLink } from 'react-router-dom'
import img from "../assests/img.jpg";
import  "../styles/Home.css";
function Home() {
  return (
    <div className="home"style={{backgroundImage: `url(${img})`}}>
       <div className="headerContainer" >
       
        <h1>ROYAL INN </h1>
        <br></br>
        <i> A hotel should be more than just a place to sleep</i>
        <NavLink to="/menu">
          <button> Book NOW </button>
        </NavLink>
      </div>
    </div>
  )
}

export default Home