import './App.css'


import {BrowserRouter, Routes, Route} from "react-router-dom";

// Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx"

// Components
import Navbar from "./components/Navbar.jsx"
import Product from "./pages/Product.jsx";

function App() {

  return (
    <>
        <div>
            <h1>React Router</h1>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    {/*Rota dinâmica*/}
                    <Route path="/products/:id" element={<Product />} />
                </Routes>
            </BrowserRouter>
        </div>
    </>
  )
}

export default App
