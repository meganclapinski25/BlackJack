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
                    <h2>Welcome To Gamescon</h2>
                    <p>GameScon is a game center created by Me (Megan Clapinski)</p>
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
                    <img src={process.env.PUBLIC_URL + '/blackjack1.png'} alt="BlackJack Photo" /> 
                </div>
                
            </div>
        </div>
    )
}
export default Home;