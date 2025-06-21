export const Header = () => {
    return (
        <div  className="bg-gray-100 flex items-center justify-between w-full px-4 py-2 relative">
            <div className="flex ">
                <ul className="flex space-x-2">
                <li className="text-red-400 font-bold text-4xl">.</li>
                <li className="text-yellow-400 font-bold text-4xl">.</li>
                <li className="text-green-400 font-bold text-4xl">.</li>
            </ul>
            </div>
            
            <div className="flex-1 flex justify-center">
                <input
                    type="search"
                    className=" px-4 py-2 rounded w-96"
                    placeholder="Search..."
                />
            </div>
        
        </div>
    )
}