import React from "react";

const Shop = (props) => {
    return (
        <div>
            <div className="leftColumn">
                <div className="topContainer">
                    <h6>Shop/</h6>
                    <h1>{props.status}</h1>
                </div>
                <ul className="bottomContainer">
                    <li onClick={(event) => props.changeStatus(event)}>All Products</li>
                    <li onClick={(event) => props.changeStatus(event)}>Hats</li>
                    <li onClick={(event) => props.changeStatus(event)}>Jackets</li>
                    <li onClick={(event) => props.changeStatus(event)}>Shirts</li>
                    <li onClick={(event) => props.changeStatus(event)}>Pants</li>
                    <li onClick={(event) => props.changeStatus(event)}>Shoes</li>
                </ul>
            </div>
            <div className="rightColumn">
                {props.catalog.map((element, id) => {
                    return (
                        <div className="product" key={`${element.name}${id}`} value={`${element}`}>
                            <img src={element.image}></img>
                            <div className="productName">{element.name}</div>
                            <div className="price">{`$${element.price}`}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Shop;