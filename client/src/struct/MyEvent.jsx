import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const MyEvent = ({ refreshKey }) => {
  const [events, setEvents] = useState([]);

  // Fetch all services (events)
  const fetchEvents = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/data/service");
      const data = await res.json();
      setEvents(data.services || []);
    } catch (error) {
      toast.error("Failed to load events");
    console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/data/service/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        toast.success("Event deleted");
        fetchEvents();
      } else {
        toast.error("Failed to delete event");
      }
    } catch (error) {
      toast.error("Error deleting event");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [refreshKey]);

  return (
    <div className="my-12">
      <h2 className="mx-10 font-bold text-3xl text-[#9a3412] mb-6">Events</h2>

      {events.length === 0 ? (
        <p className="text-center text-gray-500">No events found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10">
          {events.map((event) => (
            <div
              key={event._id}
              className="bg-white shadow-md p-4 rounded hover:shadow-lg transition"
            >
              {/* <img
                src={event.photo || "https://via.placeholder.com/300"} // fallback image
                alt={event.title}
                className="w-full h-48 object-cover rounded"
              /> */}
              <h3 className="text-xl font-bold mt-2">{event.title}</h3>
              <p className="text-sm text-gray-600">Speaker: {event.instructor}</p>
              <p className="text-sm text-gray-600">
                Time: {new Date(event.time).toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">Location: {event.destination}</p>

              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => handleDelete(event._id)}
                  className="bg-red-600 text-white py-1 px-3 rounded text-sm hover:bg-red-700"
                >
                  Delete
                </button>
                {/* Optional: add Edit button logic here */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
