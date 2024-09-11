import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';

function Header(){
    
    return(
        <div>
            <div className="navbar">
                <h1></h1>
                <div className="nav-links">
                    <a><Link to="/blackjack">BlackJack</Link></a>
                    
                </div>
            </div>
        </div>
    );
}
export default Header