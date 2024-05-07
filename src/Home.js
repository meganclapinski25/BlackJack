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
                    <ul className="games-out">
                        <li>BlackJack</li>
                    </ul>
                    <p>Games that are currently being worked on are</p>
                    <ul>
                        <li>Memory Matching</li>
                    </ul>
                </div>
                <div className="image">
                    <img src={process.env.PUBLIC_URL + '/blackjack1.png'} /> 
                </div>
                
            </div>
        </div>
    )
}
export default Home;