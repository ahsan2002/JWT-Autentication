import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';
import Navbar from './Navbar';
import Mynavbar from './Mynavbar';
import Login from './Login';
import Signup from './Signup';
import Product from './Product';
import Home from './Home';
import About from './About';
import Logout from './Logout';
import { GlobalContext } from './context/Context';

const Main = () => {
    let { state, dispatch } = useContext(GlobalContext);



    useEffect(() => {

        let baseUrl = ""
        if (window.location.href.split(":")[0] === "http") {
            baseUrl = "http://localhost:5001";

        }

        const getProfile = async () => {

            try {
                let response = await axios.get(`${baseUrl}/api/v1/products`, {
                    withCredentials: true
                })

                console.log("response: ", response);


                dispatch({
                    type: 'USER_LOGIN'
                })
            } catch (error) {

                console.log("axios error: ", error);

                dispatch({
                    type: 'USER_LOGOUT'
                })
            }



        }
        getProfile();

    }, [])



    return (
        <>
            {
                (state.isLogin === true) ?
                    <Mynavbar />
                    : null
            }

            {

                (state.isLogin === false) ?
                    <Navbar />
                    : null
            }

            {

                (state.isLogin === true) ?

                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/product" element={<Product />} />
                    </Routes>
                    : null
            }

            {
                (state.isLogin === false) ?

                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        {/* <Route path="/product" element={<Product />} /> */}
                    </Routes>
                    : null
            }



            {(state.isLogin === null) ?

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: '100vh' }}>
                    <h1>Loading..........</h1>
                </div>

                : null}

        </>
    )
}

export default Main