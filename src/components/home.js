import React from "react";
import Button from "./button";
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Tagline Product</h1>
            <div>Description</div>
            <Link to='/shop'>
                <Button word={"Shop Now"}/>
            </Link>
        </div>
    )
}

export default Home;