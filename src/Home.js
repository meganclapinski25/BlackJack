import React from "react";
import Header from "./Header";
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';



function Home(){
    return (
        <div>
            <Header />
            <div className="container">
                <div className="welcome">
                    <h1>Welcome To (Title)</h1>
                    <p>(Title) is a game center created by Me (Megan Clapinski)</p>
                    <p>Games we currently have added are</p>
                    <ul>
                        <li><Link to="/blackjack">BlackJack</Link></li>
                        <li>Memeory Matching</li>
                    </ul>
                </div>
                <div className="image">
                    <img src={process.env.PUBLIC_URL + '/img-place.gif'} /> 
                </div>
                <div className="CTA-buttons">
                    <FontAwesomeIcon icon="fa-solid fa-diamond" />

                </div>
            </div>
        </div>
    )
}
export default Home;