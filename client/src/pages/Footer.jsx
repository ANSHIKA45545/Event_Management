import { ImTwitter } from "react-icons/im";
import { ImFacebook } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { BsDiscord } from "react-icons/bs";

export const Footer = () => {
    return (
        <footer className="bg-[#3730a3] text-white p-10 text-center">
            <div className="flex flex-col items-center">
                <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="mb-4"
                >
                    
                </svg>

                <p className="font-bold">
                    BeEvent Community Org.
                    <br />
                    Providing reliable tech since 1992
                </p>
                <p className="text-sm mt-2">
                    &copy; {new Date().getFullYear()} - All rights reserved
                </p>

                <div className="flex gap-4 mt-4">
                    {/* Social icons */}
                    <a href="https://github.com/ANSHIKA45545" aria-label="Twitter">
                        <ImTwitter className="w-6 h-6 fill-current"/>
                    </a>

                    <a href="https://www.linkedin.com/in/anshika-yadav-308b6127a/" aria-label="Twitter">
                        <ImLinkedin  className="w-6 h-6 fill-current"/>
                    </a>

                    <a href="https://www.linkedin.com/in/anshika-yadav-308b6127a/" aria-label="Twitter">
                        <ImFacebook className="w-6 h-6 fill-current"/>
                    </a>

                    <a href="https://github.com/ANSHIKA45545" aria-label="Twitter">
                        <BsDiscord className="w-6 h-6 fill-current"/>
                    </a>
                    
                </div>
            </div>
        </footer>
    );
};
