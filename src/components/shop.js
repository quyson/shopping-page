import React from "react";

const Shop = (props) => {
    return (
        <div>
            <div className="leftColumn">
                <div className="topContainer">
                    <h6>Shop</h6>
                    <h1>{props.status}</h1>
                </div>
                <ul className="bottomContainer">
                    <li>Hats</li>
                    <li>Jackets</li>
                    <li>Shirts</li>
                    <li>Pants</li>
                    <li>Shoes</li>
                </ul>
            </div>
            <div className="rightColumn">
                /*map through catalog */
            </div>
        </div>
    )
}

export default Shop;