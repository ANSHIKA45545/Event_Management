import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import {toast } from "react-toastify";

export const Login = () => {

    const [user,setUser] =useState({
        email:"",
        password:""
    });

    const navigate= useNavigate();
    const {storeTokenInLS}= useAuth();

    const handleInput =(e) =>{
        let name=e.target.name;
        let value=e.target.value;

        setUser({
            ...user,
            [name]:value,
        });
    };

    const handleSubmit = async(e) =>{
        e.preventDefault();

        try{
            const response=await fetch(`http://localhost:5000/api/auth/login` ,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(user),
            })
            console.log("login :",response);
            const res_data = await response.json();

        if(response.ok){
            toast.success("Login successfully");
                storeTokenInLS(res_data.token);

            setUser({email:"",password:""});
            navigate("/")
        }else{
            toast.error(res_data.extraDetails ? res_data.extraDetails : 
                res_data.message
            );
            console.log("Invalid credentials");
    }  
    }catch(error){
        console.log("registers ", error);
    }
};


    return (
        <div className="animate-slideDown flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email" required
                            autoComplete="off"
                            value={user.email}
                            onChange={handleInput}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password" required
                            autoComplete="off"
                            value={user.password}
                            onChange={handleInput}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Login
                    </button>
                </form>

                <p className="text-sm text-center mt-4">
                    Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Register</a>
                </p>
            </div>
        </div>
    );
};
