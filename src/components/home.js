import React from "react";
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Tagline Product</h1>
            <div>Description</div>
            <Link to='/shop'>
                <button>Shop Now</button>
            </Link>
        </div>
    )
}

export default Home;