import React, { useEffect } from "react";
import { useState } from "react";
import "./bag.css";

const Bag = (props) => {
    
    return (
        <div className="bagContainer">
            <h2>Your Bag:</h2>
            <ul className="bagList">
                {props.bag.map((element, id) => {
                    return(
                        <li className="bagItem" key={`${element.name}${element.price}${id}`}>
                            <div>{element.name}</div>
                            <div>{`$${element.price}`}</div>
                            <img src={element.image}></img>
                            <div className="X" onClick={() => 
                                {props.deleteBag(id);
                                props.deleteTotal(element.price);
                                }}>X</div>
                        </li>
                    )
                })}
            </ul>
            <div className="total">{`Your Total: $${props.total}`}</div>
        </div>
    )
}

export default Bag;