import './App.css';
import React from "react";
import Toolbar from "./components/Toolbar.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Gallery from "./pages/Gallery.jsx";
import Poetry from "./pages/Poetry.jsx";

function App() {
  return (
    <>
        <Toolbar />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/poetry" element={<Poetry/>} />
            <Route path="/gallery" element={<Gallery/>} />
        </Routes>
    </>
  )
}

export default App
