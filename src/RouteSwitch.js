import React, { useEffect } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";
import Home from './components/home';
import Navbar from './components/Navbar';
import Shop from './components/shop';

import blac from './assets/blac.jpg';
import blackBack from './assets/blackBack.jpg';
import cargo from './assets/cargo.jpg';
import cargoBack from './assets/cargoBack.jpg';
import skinnyJeans from './assets/skinnyJeans.jpg';
import skinnyJeansBack from './assets/skinnyJeansBack.jpg';
import baggy from './assets/baggy.jpg';
import baggyBack from './assets/baggyBack.jpg';
import lakers from './assets/lakers.jpg';
import spacejam from './assets/spacejam.jpg';
import spongebob from './assets/spongebob.jpg';
import spongebobBack from './assets/spongebobBack.jpg';
import tiger from './assets/tiger.jpg';
import tigerBack from './assets/tigerBack.jpg';


const RouteSwitch = () => {
  const inventory = [
    {type: 'shirt', name: 'Lakers Graphics T-Shirt', image: lakers, back: 'none', price: 45},
    {type: 'shirt', name: 'Space Jam Graphics T-Shirt', image: spacejam, back: 'none', price: 35},
    {type: 'shirt', name: 'Spongebob Lover Graphics T-Shirt', image: spongebob, back: spongebobBack, price: 35},
    {type: 'shirt', name: 'Tiger Graphics T-Shirt', image: tiger, back: tigerBack, price: 50},
    {type: 'pants', name: 'Black Skinny Jeans', image: blac, back: blackBack, price: 55},
    {type: 'pants', name: 'Nethan Collection Cargo Pants', image: cargo, back: cargoBack, price: 70},
    {type: 'pants', name: 'JD Collaboration Baggy Pants', image: baggy, back: baggyBack, price: 80},
    {type: 'pants', name: 'Skinny Jeans', image: skinnyJeans, back: skinnyJeansBack, price: 45}
  ];
  const [catalog, setCatalog] = useState(inventory);
  const [bag, setBag] = useState([]);
  const [status, setStatus] = useState('All Products')

  const changeStatus = (event) => {
    setStatus(event.target.textContent);
  }


  /* useeffect render only items that match status*/
  return (
    <BrowserRouter>
      <Navbar bag={bag}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop status={status} catalog={catalog} changeStatus={changeStatus}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;
