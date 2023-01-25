import React, { useEffect } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";
import Home from './components/home';
import Navbar from './components/Navbar';
import Shop from './components/shop';
import ItemDetail from "./item";

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
import airHuarache from './assets/airHuarache.jpg';
import airHuaracheBack from './assets/airHuaracheBack.jpg';
import airJordan1Mid from './assets/airJordan1Mid.jpg';
import airJordan1MidBack from './assets/airJordan1MidBack.jpg';
import airJordan5 from './assets/airJordan5.jpg';
import airJordan5Back from './assets/airJordan5Back.jpg';
import airJordanLow from './assets/airJordanLow.jpg';
import airJordanLowBack from './assets/airJordanLowBack.jpg';
import sunwearPuffer from './assets/sunwearPuffer.jpg';
import sunwearBack from './assets/sunwearBack.jpg';
import varsity from './assets/varsity.jpg';
import varsityBack from './assets/varsityBack.jpg';
import nikehat from './assets/nikehat.jpg';
import nikehatBack from './assets/nikehatBack.jpg';


const RouteSwitch = () => {
  const inventory = [
    {type: 'Shirts', name: 'Lakers Graphics T-Shirt', image: lakers, back: 'none', price: 45},
    {type: 'Shirts', name: 'Space Jam Graphics T-Shirt', image: spacejam, back: 'none', price: 35},
    {type: 'Shirts', name: 'Spongebob Lover Graphics T-Shirt', image: spongebob, back: spongebobBack, price: 35},
    {type: 'Shirts', name: 'Tiger Graphics T-Shirt', image: tiger, back: tigerBack, price: 50},
    {type: 'Pants', name: 'Black Skinny Jeans', image: blac, back: blackBack, price: 55},
    {type: 'Pants', name: 'Nethan Collection Cargo Pants', image: cargo, back: cargoBack, price: 70},
    {type: 'Pants', name: 'JD Collaboration Baggy Pants', image: baggy, back: baggyBack, price: 80},
    {type: 'Pants', name: 'Skinny Jeans', image: skinnyJeans, back: skinnyJeansBack, price: 45},
    {type: 'Shoes', name: 'Nike Air Huarache', image: airHuarache, back: airHuaracheBack, price: 110},
    {type: 'Shoes', name: 'Nike Air Jordan 1 Mids', image: airJordan1Mid, back: airJordan1MidBack, price: 125},
    {type: 'Shoes', name: 'Nike Air Jordan Lows', image: airJordanLow, back: airJordanLowBack, price: 90},
    {type: 'Shoes', name: 'Nike Air Jordan 5', image: airJordan5, back: airJordan5Back, price: 195},
    {type: 'Jackets', name: 'Pac Sunwear Puffer Jacket', image: sunwearPuffer, back: sunwearBack, price: 70},
    {type: 'Jackets', name: 'Happy Varsity Jacket', image: varsity, back: varsityBack, price: 65},
    {type: 'Hats', name: 'Have A Nike Day Cap', image: nikehat, back: nikehatBack, price: 25}
  ];
  const [catalog, setCatalog] = useState(inventory);
  const [bag, setBag] = useState([]);
  const [status, setStatus] = useState('All Products');
  const changeStatus = (event) => {
    setStatus(event.target.textContent);
  }
  const addBag = (event) => {
    setBag([...bag ,event.target.value]);
  }
  useEffect(() => {
    let placeholder = [...inventory];
    if(status == 'Shirts'){
      placeholder = placeholder.filter((element) => element.type == 'Shirts');
      setCatalog([...placeholder]);
    } else if (status == 'Pants'){
      placeholder = placeholder.filter((element) => element.type == 'Pants');
      setCatalog([...placeholder]);
    } else if (status == 'Hats'){
      placeholder = placeholder.filter((element) => element.type == 'Hats');
      setCatalog([...placeholder]);
    } else if (status == 'Jackets'){
      placeholder = placeholder.filter((element) => element.type == 'Jackets');
      setCatalog([...placeholder]);
    } else if (status == 'Shoes'){
      placeholder = placeholder.filter((element) => element.type == 'Shoes');
      setCatalog([...placeholder]);
    } else {
      setCatalog([...placeholder]);
    }
    }, [status]);

  return (
    <BrowserRouter>
      <Navbar bag={bag}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop status={status} catalog={catalog} changeStatus={changeStatus} addBag={addBag}/>} />
        <Route path="/shop/:id" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;
