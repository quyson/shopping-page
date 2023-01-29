import React from "react";
import './footer.css';

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="columns">
                <div className="leftC">
                    <li>Gift Cards</li>
                    <li>Promotions</li>
                    <li>Find a Store</li>
                    <li>Sign Up for Email</li>
                    <li>Become a Member</li>
                    <li>JD Journal</li>
                    <li>Send Us FeedBack</li>
                </div>
                <div className="midC">
                    <li>Get Help</li>
                    <li>Order Status</li>
                    <li>Shipping and Delivery</li>
                    <li>Payment Options</li>
                    <li>Gift Card Balance</li>
                    <li>Contact Us</li>
                </div>
                <div className="rightC">
                    <li>About JD</li>
                    <li>News</li>
                    <li>Careers</li>
                    <li>Investors</li>
                    <li>Purpose</li>
                    <li>Sustainability</li>
                </div>
            </div>
            <div className="bottomBar">
                <div className="leftBottomBar">
                    <div className="location">United States</div>
                    <div>2023 JD All Rights Reserved</div>
                </div>
                <div className="rightBottomBar">
                    <li>Guides</li>
                    <li>Terms of Sale</li>
                    <li>Terms of Use</li>
                    <li>JD Privacy Policy</li>
                    <li>CA Supply Chains Act</li>
                    <li>This is a Nethan Quach Production</li>
                </div>
            </div>
        </div>
    )
}

export default Footer;