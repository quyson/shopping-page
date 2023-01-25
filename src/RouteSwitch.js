import React, { useEffect } from "react";
import {BrowserRouter, Routes, Route, Form} from "react-router-dom";
import { useState } from "react";
import Home from './components/home';
import Navbar from './components/Navbar';
import Shop from './components/shop';
import ItemDetail from "./item";
import inventory from "./assets/data";

const RouteSwitch = () => {
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

