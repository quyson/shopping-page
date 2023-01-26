import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
        <div>
            <nav>
                <Link to='/'>
                    <h1>Title</h1>
                </Link>
                <div className="leftNav">
                    <Link to='/shop'>
                        <h1>Shop</h1>
                    </Link>
                    <h1>Search</h1>
                    <h1 onClick={(event) => props.changeBag(event)}>Bag</h1>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;