import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    const linkStyle = {
        textDecoration:"none",
        listStyle:"none",
        color:"white",
        fontSize: "20px"
      };

  return (
    <>
    <div className="tab">
    <NavLink  style={linkStyle} to='/signup'>Sign Up</NavLink>
    <NavLink  style={linkStyle}to='/login'>Log in</NavLink>
    </div>
    </>
  )
}

export default Navbar