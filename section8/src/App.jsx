import './App.css'


import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

// Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx"

// Components
import Navbar from "./components/Navbar.jsx"
import Product from "./pages/Product.jsx";
import Info from "./pages/Info.jsx";
import NotFound from "./pages/NotFound.jsx";
import SearchForm from "./components/SearchForm.jsx";
import Search from "./pages/Search.jsx";

function App() {

  return (
    <>
        <div>
            <h1>React Router</h1>
            <BrowserRouter>
                <Navbar />
                {/*Search*/}
                <SearchForm></SearchForm>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    {/*Nested Routes*/}
                    <Route path="/products/:id/info" element={<Info />} />
                    {/*Rota dinâmica*/}
                    <Route path="/products/:id" element={<Product />} />
                    {/*Search*/}
                    <Route path="/search" element={<Search />} />
                    {/*Redirect*/}
                    <Route path="/company" element={<Navigate to="/about" />} />
                    {/*No Match Route*/}
                    <Route path = "*" element={<NotFound />}/>
                </Routes>
            </BrowserRouter>
        </div>
    </>
  )
}

export default App
