import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from '../assets/logo.jpg';

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
                    <div className="bag" onClick={(event) => props.changeBag(event)}>
                        <h4>Bag</h4>
                        <div>{props.bag.length}</div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;