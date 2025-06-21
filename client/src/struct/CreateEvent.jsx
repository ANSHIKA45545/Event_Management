import { Link } from "react-router-dom"
import { Navbar } from "../pages/Navbar"
import { useState } from "react";
import { Footer } from "../pages/Footer";
import {toast } from "react-toastify";
import { MyEvent } from "./MyEvent";
import { Contact } from "./Contact";

export const CreateEvent = () => {
    
  const [showContact, setShowContact] = useState(false);

    const [refreshKey, setRefreshKey] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    instructor: "",
    time: "",
    destination: "",
    // photo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/data/service", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Event created!");
        setFormData({
          title: "",
          instructor: "",
          time: "",
          destination: "",
        //   photo: "",
        });
        setRefreshKey((prev) => prev + 1); // 🔄 Trigger MyEvent refresh
      } else {
        toast.error("Failed to create event");
      }
    } catch (error) {
      console.error("Form submit error:", error);
      toast.error("Error creating event");
    }
  };


    return (
        <div className="animate-slideDown ">
            <div className="">
                <Navbar showContact={showContact} setShowContact={setShowContact}/>
                   
                   <Contact showContact={showContact} onClose={() => setShowContact(false)} />

            </div>
            <div className="text-center pt-10">
                <p className="text-5xl">
                    Built for Organizers, Loved by Attendees
                </p>
                <p className="text-lg pt-4">
                    The all-in-one event platform trusted globally by professionals and communities.
                </p>
            </div>

            <div className="flex justify-center space-x-4 pt-5">
                <Link to="/login" className="text-white bg-[#3730a3] py-4 px-5 mt-2 rounded-3xl hover-bg-red-400  cursor-pointer hover:bg-white hover:shadow-xl hover:text-[#3730a3]">
                    Get Started for free
                </Link>
            
                <Link to="/offer" className="shadow-xl bg-gray-200 text-[#3730a3] bg-white py-4 px-8 mt-2 rounded-3xl hover-bg-red-400  cursor-pointer hover:text-white hover:bg-[#3730a3]">
                    Contact Sales
                </Link>
            </div>

             
            <div className="flex my-28">
                <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md  ">
                <h2 className="text-2xl font-bold mb-4">Call your Audience</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="title"
                        placeholder="Event Title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                    <input
                        type="text"
                        name="instructor"
                        placeholder="Instructor"
                        value={formData.instructor}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                    
                    <input
                        type="datetime-local"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                    <input
                        type="text"
                        name="destination"
                        placeholder="Destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                    <button
                        type="submit"
                        className=" bg-blue-600 text-white py-2 px-3 rounded hover:bg-blue-700 mt-3"
                    >
                        Create Event
                    </button>
                </form>
            </div>
            
                <div className="hidden lg:block md:block">
                    <img src="phone.jpg" alt="phone" className="w-[450px] "/>
                </div>

            </div>

            <MyEvent refreshKey={refreshKey} />
            

            <div className="">
                <Footer />
            </div>
        </div>
    )
}