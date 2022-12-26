import React from 'react';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';
import Product from './Product';

const Main = () => {


    return (
        <>

            <Navbar />

            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/product" element={<Product />} />
            </Routes>


        </>
    )
}

export default Main