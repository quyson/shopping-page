import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = (props) => {
    return (
        <div>
            <nav>
                <Link to='/'>
                    <h4>JD STORE</h4>
                </Link>
                <div className="leftNav">
                    <Link to='/shop'>
                        <h4>Shop</h4>
                    </Link>
                    <h4>Search</h4>
                    <h4 onClick={(event) => props.changeBag(event)}>Bag</h4>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;