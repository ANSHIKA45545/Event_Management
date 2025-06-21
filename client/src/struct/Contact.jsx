import React, { useEffect, useState } from "react";
import {toast } from "react-toastify";
import { useAuth } from "../store/auth";

const defaultContactForm ={
    username:"",
    email:"",
    phone:"",
    message:""
}

export const Contact = ({ showContact, onClose }) => {
  const [visible, setVisible] = useState(false);

  const [contact,setContact] =useState(defaultContactForm);
        
        const [userData, setUserData] = useState(true);
        const {user} =useAuth();

        if(userData && user){
            setContact({
                username:user.username,
                email:user.email,
                phone:user.phone,
                message:"",
            });
            setUserData(false);
        }
    
        const handleInput =(e) =>{
            let name=e.target.name;
            let value=e.target.value;
    
            setContact({
                ...contact,
                [name]:value,
            });
        };
       
        const handleSubmit = async (e) =>{
            e.preventDefault();
            console.log(contact);
    
            try{
            const response = await fetch(`http://localhost:5000/api/form/contact`,{
                method:"POST",
                headers:{
                    "Content-Type" :"application/json",
                },
                body:JSON.stringify(contact),
            });
            if(response.ok){
            setContact(defaultContactForm);
            const data= await response.json();
            console.log(data);
            toast.success("Message send successfully");
            }
        }catch(error){
            console.log("contact", error);
        }
        
};
   

  useEffect(() => {
    if (showContact) {
      setVisible(true);
    } else {
      setTimeout(() => setVisible(false), 300);
    }
  }, [showContact]);

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      {visible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10 z-40"
          onClick={handleClose}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 w-1/2 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          showContact ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button onClick={handleClose} className="absolute top-4 right-4 text-xl">
          ✕
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={contact.email}
              onChange={handleInput}
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="phone"
              name="phone"
              placeholder="Phone"
              value={contact.phone}
              onChange={handleInput}
              className="w-full border px-3 py-2 rounded"
            />
            <textarea
              rows="4"
               name="message"
              placeholder="Message"
              value={contact.message}
              onChange={handleInput}
              className="w-full border px-3 py-2 rounded"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
