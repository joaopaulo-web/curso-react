import './App.css'

// React Router Dom
import {BrowserRouter, Routes, Route} from "react-router-dom";

//Componentes
import Navbar from "./components/Navbar.jsx";

//Páginas
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function App() {

  return (
    <>
        <div>
            <h1>Context</h1>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    </>
  )
}

export default App
