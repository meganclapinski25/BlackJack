import React from "react";
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer(){

    return(
        <div className="footer">
            <h3>Copyright Megan Clapinski</h3>
            <div className="nav-links-footer">
                    <a><Link to="/">Home</Link></a>
                    <a><Link to="/contact">Contact</Link></a>
                    <a><Link to="/blackjack">BlackJack</Link></a>
                    
             </div>

        </div>
    )


}
export default Footer;