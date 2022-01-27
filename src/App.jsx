import React from "react";
import Home from "./pages/Home";
import Credentials from "./pages/Credentials"
import Nav from "./components/Nav";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, BrowserRouter, useLocation } from "react-router-dom";

const App = () => {
    return <BrowserRouter>
    <Nav />
    <AnimatePresence>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/credentials" element= {<Credentials />} />
    </Routes>
    </AnimatePresence>
    </BrowserRouter>
    
}

export default App