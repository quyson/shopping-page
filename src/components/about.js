import React from "react";
import jd from '../assets/image0.jpeg';
import "./about.css";


const About = () => {
    return (
        <div className="ownerContainer">
            <h2>About Us</h2>
            <div className="aboutContainer">
                <img className="owner" src={jd}></img>
                <div className="aboutText"> Hello. My name is Jonathan Do.
                 I like to eat breakfast. And my favorite food is the pineapple. 
                 But I don't like pineapple on pizza. I created this brand to not only make money,
                 but showcase my creativity. Which is why I resell clothes from other brands at an upscale price,
                 and hypebeasts will happily buy my products. I am very happy, and my name is JD.</div>
            </div>
        </div>
    )
}

export default About;