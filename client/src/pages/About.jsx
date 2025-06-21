export const About =() => {
    return (
        <div className="bg-[#94a3b8] h-fit">
            
        <div className="text-center py-6">
            <div className="flex justify-center space-x-2 font-bold text-lg">
                <p className="text-white text-2xl">Who </p>
                <p className="text-[#9a3412] text-2xl ">Speaking ?</p>
            </div>
            <p className="leading-loose text-[#e5e7eb]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.  dolore</p>
        </div>

        <div className="pt-8 pb-6">
            
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-10 lg:px-56">
  {/* Card 1 */}
  <div className="bg-white shadow-md p-2 rounded">
    <img src="meetup.jpg" className="lg:w-72 h-72"/>
    <p className="text-center text-sm text-gray-600">Jolly Deol</p>
  </div>

  {/* Card 2 */}
  <div className="bg-white shadow-md p-2 rounded">
    <img src="meetup.jpg" className="lg:w-72 h-72"/>
    <p className="text-center text-sm text-gray-600">Jolly Deol</p>
  </div>

  {/* Card 3 */}
  <div className="bg-white shadow-md p-2 rounded">
    <img src="meetup.jpg" className="lg:w-72 h-72"/>
    <p className="text-center text-sm text-gray-600">Jolly Deol</p>
  </div>

</div>


     <div className="hidden lg:flex md:flex justify-end lg:px-10 pt-3">
        <p className="text-lg text-[#9a3412] bg-white py-3 px-2 rounded-lg font-bold">Be there to witness thought leadership at its finest.</p>
        <p></p>
     </div>

        </div>
        
    </div>
    )
}