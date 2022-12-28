import axios from 'axios';
import React from 'react'
import {NavLink} from 'react-router-dom';
import { useState,useContext } from 'react';
import { GlobalContext } from './context/Context';

const Mynavbar = () => {
  let { state, dispatch } = useContext(GlobalContext);

  const logout=()=>{
    let baseUrl = ""
    if (window.location.href.split(":")[0] === "http") {
        baseUrl = "http://localhost:5001";

    }

    axios.post(`${baseUrl}/api/v1/logout`, {
    })
      .then(response => {
        console.log("response: ", response.data);
        // navi("/Product");
      })
      dispatch({
        type: 'USER_LOGOUT',
        payload: null
    })
      .catch(err => {
        console.log("error: ", err);
      })
  }

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
    <div className="btn">
      <button onClick={logout}>Log out</button>
    </div>
    </>
  )
}

export default Mynavbar;