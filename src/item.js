import React from "react";
import { useParams } from "react-router-dom";
import Button from "./components/button";
import { Link } from "react-router-dom";
import inventory from "./assets/data";


const ItemDetail = (props) => {
    const productId = useParams();
    const product = inventory.find((element) => element.name === productId.id);
    const {image, name, price} = product;

    return (
        <div>
            <img src={image}></img>
            <h5>{name}</h5>
            <div>{price}</div>
            <Button addBag={props.addBag} product={product} word={'Add to Cart'}/>
            <Button word={'Buy Now'}/>
            <Link to='/shop'>Back To Shop</Link>
        </div>
    )
}

export default ItemDetail;