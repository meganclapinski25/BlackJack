import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';
function Header(){
    
    return(
        <div>
            <div className="navbar">
                <h1>Gamescon</h1>
                <div className="nav-links">
                    <a><Link to="/">Home</Link></a>
                    <a><Link to="/blackjack">Contact</Link></a>
                    <a><Link to="/blackjack">BlackJack</Link></a>
                    <a>Memeory Matching</a>
                </div>
            </div>
        </div>
    );
}
export default Header