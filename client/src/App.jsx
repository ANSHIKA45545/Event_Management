import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import ScrollToTop from "./pages/ScrollToTop";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Events } from "./struct/Events";
import { CreateEvent } from "./struct/CreateEvent";

const App =() => {
  return (
    <div className="lg:px-10 md:px-2 shadow-6xl rounded-lg">
    <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} /> 
      <Route path="/event" element={<Events/>} />
      <Route path="/create" element={<CreateEvent/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;