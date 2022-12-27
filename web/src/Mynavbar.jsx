import React from 'react'
import {NavLink} from 'react-router-dom';

const Mynavbar = () => {
    const linkStyle = {
        textDecoration:"none",
        listStyle:"none",
        color:"Black",
        fontSize: "20px",
        fontWeight:"Bold"
      };

  return (
    <>
    <div className="tab">
    <NavLink  style={linkStyle} to='/home'>Home</NavLink>
    <NavLink  style={linkStyle}to='/about'>About</NavLink>
    <NavLink  style={linkStyle}to='/product'>Products</NavLink>
    </div>
    </>
  )
}

export default Mynavbar;