import { useEffect } from "react";
import { Navbar } from "../pages/Navbar";

export const Offer = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
        <div className="animate-slideDown">

            <div className="">
                <Navbar />
            </div>

            <div className="flex items-center justify-center">
                <p className="text-3xl font-bold bg-[#3730a3] text-white py-2 px-5 rounded mt-10">Buy Membership</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-10 lg:px-52 py-24">
                <div className="bg-gray-200 text-center py-5 border-t-[10px] border-[#3730a3] rounded-lg shadow-lg"> 
                <p className="py-6 text-blue-800 text-lg">TEAMLY</p>

                <div className="flex justify-center space-x-2 mb-4">
                    <p className="text-3xl font-bold">Free</p>
                    <p className="text-gray-600 mt-2 ">Always</p>
                </div>

                <p className="">$0/month</p>
                <p className="text-gray-600">Completely Free</p>

                <button className="text-white bg-[#3730a3] rounded-2xl my-4 py-3 px-4">
                    Always Free
                </button>
            </div>

            <div className="bg-gray-200 text-center py-5 border-t-[10px] border-[#3730a3] rounded-lg shadow-lg"> 
                <p className="py-6 text-[#9a3412] text-lg">TEAMLY PRO</p>

                <div className="flex justify-center space-x-2 mb-4">
                    <p className="text-3xl font-bold">$5</p>
                    <p className="text-gray-600 mt-2 ">user/month</p>
                </div>

                <p className="">Due today: $120.00</p>
                <p className="text-gray-600">Billed Annually</p>

                <button className="text-white bg-[#3730a3] rounded-2xl my-4 py-3 px-4">
                    Get Started
                </button>
            </div>

            <div className="bg-gray-200 text-center py-5 border-t-[10px] border-[#3730a3] rounded-lg shadow-lg"> 
                <p className="py-6 text-blue-800 text-lg">TEAMLY BUSINESS</p>

                <div className="flex justify-center space-x-2 mb-4">
                    <p className="text-3xl font-bold">$9</p>
                    <p className="text-gray-600 mt-2 ">user/month</p>
                </div>

                <p className="">Due today: $216.00</p>
                <p className="text-gray-600">Billed Annually</p>

                <button className="text-white bg-[#3730a3] rounded-2xl my-4 py-3 px-4">
                    Get Started
                </button>
            </div>
            </div>
            
        </div>
    )
}