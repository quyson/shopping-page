import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "./button";
import { Link } from "react-router-dom";
import inventory from "../assets/data";
import './item.css';


const ItemDetail = (props) => {
    const productId = useParams();
    const product = inventory.find((element) => element.name === productId.id);
    const {image, name, price} = product;

    return (
        <div className="itemContainer">
            <img src={image}></img>
            <h2>{name}</h2>
            <div>{`$${price}`}</div>
            <div className="itemButtonContainer">
                <Button addBag={props.addBag} product={product} word={'Add to Cart'} addTotal={props.addTotal}/>
                <Button word={'Buy Now'}/>
            </div>
            <Link className="back" to='/shop'>Back To Shop</Link>
        </div>
    )
}

export default ItemDetail;