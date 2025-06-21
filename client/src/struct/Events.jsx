import { useState } from "react";
import { Navbar } from "../pages/Navbar"
import { Contact } from "./Contact";
import { MyEvent } from "./MyEvent"

export const Events = () => {
  
    const [showContact, setShowContact] = useState(false);

    return (
        <div className="">

            <div className="">
                    <Navbar showContact={showContact} setShowContact={setShowContact}/>
                    
                                                
                          <Contact showContact={showContact} onClose={() => setShowContact(false)} />
            </div>
            
            <div className="">
                <MyEvent />
            </div>

        </div>
    )
}