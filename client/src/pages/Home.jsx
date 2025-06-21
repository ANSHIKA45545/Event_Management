import { Header } from "./Header"
import { Navbar } from "./Navbar"
import { Link } from "react-router-dom";
import {Carousels} from "../struct/Carousels";
import { Footer } from "./Footer";
import { Contact } from "../struct/Contact";
import { useEffect, useState } from "react";
import { GoChevronRight } from "react-icons/go";

export const Home = () => {

  const [showContact, setShowContact] = useState(false);
const messages = [
    "Want to organize an unforgettable event ?",
    "Discover experiences that elevate your skills.",
    "Let BeEvent make it happen."
  ];

  const [step, setStep] = useState(0);         // Message index
  const [text, setText] = useState("");        // Text currently being typed
  const [charIndex, setCharIndex] = useState(0); // Character position

  // Typing effect logic
  useEffect(() => {
    if (charIndex < messages[step].length) {
      const typing = setTimeout(() => {
        setText((prev) => prev + messages[step][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 70);
      return () => clearTimeout(typing);
    } else {
      const pause = setTimeout(() => {
        // Clear current text and move to next message (loop)
        setCharIndex(0);
        setText("");
        setStep((prev) => (prev + 1) % messages.length);
      }, 1500);
      return () => clearTimeout(pause);
    }
  }, [charIndex, step]);

  

    return (
        <>
        {/* <div className="hidden lg:block md:block">
            <Header />
        </div> */}

        <div className="flex">
            <div className="hidden lg:block">
            <div className="bg-[#3730a3] w-32 h-16">
                
            </div>

            <div className="h-screen w-32 bg-white border-l rounded-lg shadow-lg ">
               <p className="[writing-mode:_vertical-lr] text-2xl rotate-180 tracking-widest px-10 py-16
               "> WELCOME TO BeEVENT</p>
            </div>
        </div>

        {/* Main Content */}

        <div className="relative w-full">
            <div className="top-0 left-0 w-full z-10">
                <Navbar showContact={showContact} setShowContact={setShowContact}/>
                <Contact showContact={showContact} onClose={() => setShowContact(false)} />

            </div>

            <div className="absolute top-0 left-0 w-full h-full z-10 px-6 lg:px-10 ">
                <div className="mr-36 lg:mr-40 md:mr-40 h-28 lg:h-32 md:h-32 mt-20 lg:mt-36 md:mt-36">

                    <p className={`transition-all duration-300 ease-in-out
 mr-40 text-2xl lg:text-5xl font-bold leading-snug  ${step === 2 ? 'text-[#3730a3]' : 'text-white'}`}>
        {text}
        <span className="animate-pulse">|</span>
      </p> 
                  
    </div>

                <div className="mt-20 lg:mt-16 md:mt-16">

                    <div className="flex space-x-4">
                        <Link to="/create" className="text-white bg-[#3730a3] py-3 px-4 mt-2 rounded hover-bg-red-400  cursor-pointer hover:bg-white hover:text-[#3730a3]">
                            As Organizer
                        </Link>

                        <Link to="/event" className="text-[#3730a3] bg-white py-3 px-4 mt-2 rounded hover-bg-red-400  cursor-pointer hover:text-white hover:bg-[#3730a3]">
                            Or Audience
                        </Link>
                    </div>

                    <div className="hidden lg:flex md:flex text-white justify-end pt-16 pb-8">
                        <div className="py-10 px-7 bg-yellow-300 border-r border-gray-400">
                            <p className="text-3xl font-bold">1k+</p>
                            <p className="text-sm">Organizers</p>
                        </div>

                        <div className="py-10 px-5 bg-yellow-300 border-r border-gray-400">
                            <p className="text-3xl font-bold">2.2k+</p>
                            <p className="text-sm">Participants</p>
                        </div>

                        <div className="py-10 px-7 bg-yellow-300 border-r border-gray-400">
                            <p className="text-3xl font-bold">3k</p>
                            <p className="text-sm">Visitors</p>
                        </div>

                        <div className="py-10 px-5 bg-white text-gray-800">
                           <GoChevronRight  className="text-4xl font-extrabold"/>
                        </div>
                    </div>


                    <div className="hidden lg:flex md:flex items-center justify-center lg:pt-10 ">
                        <Link to="">
                        <p className="text-lg py-3 px-5 text-white bg-[#3730a3] rounded-lg  transition duration-300 ease-in-out transform hover:scale-110">Join a network of thinkers, doers, and changemakers!🎉</p>
                        </Link>
                    </div>
                </div>
            </div>

            

            


            <img src="meetup.jpg" alt="meetup" className="w-screen h-auto object-cover opacity-75"/>
        </div>
        </div>

        <div className="">
            <Carousels />
        </div>

        <div className="my-14">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7153.581581011819!2d73.01916393994267!3d26.300881358068203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418da506500cf3%3A0x4ebda4d2c7294220!2sMehrangarh%20Fort%20Way!5e0!3m2!1sen!2sin!4v1750413576956!5m2!1sen!2sin" 
            width="100%" height="450" style={{ border: 0 }}
             allowFullScreen="" 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade">

             </iframe>
</div>

        <div className="">
            <Footer />
        </div>
        </>
    )
}