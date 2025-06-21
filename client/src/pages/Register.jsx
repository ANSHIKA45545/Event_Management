import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { useAuth } from '../store/auth';
import {toast } from "react-toastify";

export const Register = () => {

    const [user,setUser] =useState({
        name:"",
        email:"",
        phone:"",
        password:""
    });

    const navigate= useNavigate();
    const {storeTokenInLS}= useAuth();

    const handleInput = (e) => {
        console.log(e);
        let name=e.target.name;
        let value=e.target.value;

        setUser({
            ...user,
            [name]:value,
        })
    };

    //handle form submit
     const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(user);

        try{
        const response = await fetch(`http://localhost:5000/api/auth/register`,{
            method:"POST",
            headers:{
                "Content-Type" :"application/json",
            },
            body:JSON.stringify(user),
        });
        
        const res_data = await response.json();
        console.log("res from server", res_data.extraDetails);

        if(response.ok){
            storeTokenInLS(res_data.token);
            console.log("Token after register/login:", localStorage.getItem("token"));
            setUser({name :"",email:"",phone:"",password:""});
            toast.success("Registration successfully"); 
            navigate("/login");
        }else{
            toast.error(res_data.extraDetails ? res_data.extraDetails : 
            res_data.message
         );
        
    }
   }catch(error){
        console.log("registers ", error);
    }
    };


    return (
        <div className="animate-slideDown flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name" required
                            value={user.name} 
                            onChange={handleInput}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email" required
                             value={user.email}
                             onChange={handleInput}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Phone</label>
                        <input
                            type="phone"
                            name="phone"
                            placeholder="Phone number" required
                            value={user.phone}
                            onChange={handleInput}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="password" required
                            value={user.password}
                            onChange={handleInput}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Register
                    </button>
                </form>

                {/* 👇 Link to login */}
                <p className="text-sm text-center mt-4">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-600 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};
