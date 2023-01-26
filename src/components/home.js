import React from "react";
import {Link} from 'react-router-dom';
import "./home.css";
import homeimage1 from '../assets/homeimage1.jpg'
import inventory from "../assets/data";

const Home = () => {
    const newInventory = inventory.slice(0,4).concat(inventory.slice(10,11));
    return (
        <div className="home">
            <div className="images">
                <img src={homeimage1}></img>
                <div className="JD">
                    <h1>The Jonathan Do Collection</h1>
                    <text>Be the first to own the premium collection from world famous designer, Jonathan Do.</text>
                </div>
            </div>
            <h1>Best Sellers</h1>
            <div className="bestSellers">
                {newInventory.map((element, id) => {
                    return(
                        <Link to={`/shop/${element.name}`} key={`${element.name}${element.id}`}>
                            <div className="bestSellerProducts">
                                <img src={element.image} className="bestImage"></img>
                                <div className="bestProductText">{element.name}</div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;