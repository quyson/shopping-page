import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";
import App from './components/App';
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
        <Route path="/" element={<App bag={bag}/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default RouteSwitch;
