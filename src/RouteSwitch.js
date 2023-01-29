import React, { useEffect } from "react";
import {BrowserRouter, Routes, Route, Form} from "react-router-dom";
import { useState } from "react";
import Home from './components/home';
import Navbar from './components/Navbar';
import Shop from './components/shop';
import ItemDetail from "./components/item";
import inventory from "./assets/data";
import Bag from "./components/bag";
import Footer from "./components/footer";

const RouteSwitch = () => {
  const [catalog, setCatalog] = useState(inventory);
  const [bag, setBag] = useState([]);
  const [status, setStatus] = useState('All Products');
  const [bagVisible, setBagVisible] = useState(false);
  const [total, setTotal] = useState(0);

  const addTotal = (price) => {
    setTotal(total + price)
  }

  const deleteTotal = (price) => {
    setTotal(total - price);
  }

  const deleteBag = (id) => {
    let placeholder = [...bag];
    let placeholder1 = placeholder.slice(0, id);
    let placeholder2 = placeholder.slice(id + 1);
    let placeholder3 = [...placeholder1, ...placeholder2];
    setBag(placeholder3);
  }

  const changeStatus = (event) => {
    setStatus(event.target.textContent);
  }
  const addBag = (product) => {
    setBag([...bag , product]);
  }

  useEffect(() => {
    console.log(bag);
  }, [bag])

  const changeBag = () => {
    if(bagVisible == false){
      setBagVisible(true);
    } else {
      setBagVisible(false);
    }
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
      <Navbar changeBag={changeBag} bag={bag}/>
      {bagVisible == true ? <Bag bag={bag} total={total} deleteBag={deleteBag} deleteTotal={deleteTotal}/> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop status={status} catalog={catalog} changeStatus={changeStatus} addBag={addBag}/>} />
        <Route path="/shop/:id" element={<ItemDetail addBag={addBag} addTotal={addTotal}/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default RouteSwitch;

