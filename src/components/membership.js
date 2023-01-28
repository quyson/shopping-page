import React from "react";
import Button from "./button";
import logo from '../assets/logo.jpg';
import './membership.css';

const Membership = () => {
    return (
        <div>
            <h1 className="memberTitle">JD Membership</h1>
            <div className="memberContainer">
                <div className="left">
                    <h1>BECOME A MEMBER</h1>
                    <div>Sign up for free. Get to the top. Join JD.</div>
                    <div className="buttonContainer">
                        <Button word={'Join Us'} />
                        <Button word={'Sign in'} />
                    </div>
                </div>
                <div className="right">
                    <img src={logo}></img>
                </div>
            </div>
        </div>
    )
}

export default Membership;