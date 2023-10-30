
import React  from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/Navbar.css'
function Navbar() {
  return (
    <div className="navbar">
        <div className="leftside">
            </div>
            <div className="rightside">
              <NavLink to ="/contact"> Contact</NavLink>
              <NavLink to ="/book"> view book</NavLink>
              <NavLink to ="/book1"> Book now</NavLink>
              <NavLink to ="/features"> Features</NavLink>
              <NavLink to ="/about"> About</NavLink>
              <NavLink to ="/"> Home</NavLink>
              <button>
              </button>
             

            </div>
        </div>
  );
}

export default Navbar