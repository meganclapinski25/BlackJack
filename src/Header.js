import React from "react";
import './Header.css';

function Header(){
    
    return(
        <div>
            <div className="navbar">
                <h1>Title</h1>
                <div className="nav-links">
                    <p>Home</p>
                    <p>Contact</p>
                    <p>BlackJack</p>
                    <p>Memeory Matching</p>
                </div>
            </div>
        </div>
    );
}
export default Header