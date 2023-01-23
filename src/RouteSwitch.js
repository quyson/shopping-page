import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";
import Home from './components/home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const RouteSwitch = () => {
  const inventory = [];
  const [catalog, setCatalog] = useState(inventory);
  const [bag, setBag] = useState([]);
  const [status, setStatus] = useState('All Products')

  return (
    <BrowserRouter>
      <Navbar bag={bag}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop status={status} catalog={catalog}/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default RouteSwitch;
