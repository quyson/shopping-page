import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";
import Home from './components/home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const RouteSwitch = () => {
  const defaultInventory = [];
  const [inventory, setInventory] = useState(defaultInventory);
  const [bag, setBag] = useState([]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default RouteSwitch;
