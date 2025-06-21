import { useState } from "react";
import { HiArrowLeft } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const images = [
  {
    src: "student.jpg",
    title: "Skill Workshops for Students ",
    description: "Explore vibrant student communities and events.",
  },
  {
    src: "arts.jpg",
    title: "Arts & Culture",
    description: "Celebrate creativity through workshops and exhibitions.",
  },
  {
    src: "workshops.jpeg",
    title: "Business Conferences",
    description: "Join top professionals and industry experts for impactful discussions and game-changing strategies.",
  },
];


export const Carousels = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const getStackOrder = () => {
    const ordered = [];
    for (let i = 0; i < images.length; i++) {
      ordered.push(images[(index + i) % images.length]);
    }
    return ordered;
  };

  return (
    <div>

      
        <div className="text-xl lg:text-3xl md:text-3xl font-bold text-center pb-5 mt-10 text-gray-800">
            <p className="text-center text-[#9a3412] mx-auto">Connect with What We Do</p>
        </div>


        <div className="relative w-[380px] h-[450px] lg:w-[800px] lg:h-[500px] md:w-[800px] md:h-[500px] mx-auto mb-10 opacity-75">
      {getStackOrder().map((imgObj, i) => (
  <div
    key={i}
    className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out rounded-lg overflow-hidden
      ${i === 0 ? "z-30 scale-100" : ""}
      ${i === 1 ? "z-20 scale-95 translate-x-10 translate-y-6" : ""}
      ${i === 2 ? "z-10 scale-90 translate-x-10 translate-y-6" : ""}
      ${i > 2 ? "hidden" : ""}
    `}
  >
    <img
      src={imgObj.src}
      alt={imgObj.title}
      className="w-full h-full object-cover rounded-lg"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center p-4">
      <h2 className="text-3xl font-bold mb-2">{imgObj.title}</h2>
      <p className="text-md mb-4">{imgObj.description}</p>
      <Link to="/event" className="bg-[#3730a3] text-white px-4 py-2 rounded hover:px-5 hover:py-3 transition">
        Learn More
      </Link>
    </div>
  </div>
))}

      <div className="absolute top-1/2 -left-12 transform -translate-y-1/2">
        <button onClick={prev} className="p-2 bg-gray-800 text-white rounded-full">
          <HiArrowLeft />
        </button>
      </div>
      <div className="absolute top-1/2 -right-16 transform -translate-y-1/2">
        <button onClick={next} className="p-2 bg-gray-800 text-white rounded-full">
          <HiArrowRight />
        </button>
      </div>
    </div>
    </div>
  );
}