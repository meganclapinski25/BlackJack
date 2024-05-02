import React, {useState, useEffect} from 'react';
import './BlackJack.css'
import Header from './Header';

const BlackJack = () =>{
    const [deck, setDeck] = useState([]);
    const [dealerHand, setDealerHand] = useState([]);
    const [playerHand, setPlayerHand] = useState([]);

    
    const cardValues = {
        '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
        'J': 10, 'Q': 10, 'K': 10, 'A': 11 
      };
    const cardSuits = ['S', 'H', 'C', 'D'];

      const createDeck = () => {
        const deck = [];
        for (const value in cardValues) {
            for (const suit of cardSuits) {
              const imageUrl = `${value}-${suit}.png`;
              deck.push({ value, suit, imageUrl });
                }
            }
            return deck;
        };
        const shuffle = () => {
            const shuffle = [...deck];
            for (let i = shuffle.length - 1; i > 0; i--){
                const j = Math.floor(Math.random() * (i+1));
                [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
                }
    return shuffle;
            
        }; 
        const score = (temp) => {
            let score = 0;

            for(const card of temp){
                score += cardValues[card.value];
            }
            
            return score
        };
        const dealCards = () => {
            const newDeck = shuffle();
            const newDealerHand = [newDeck.pop(), newDeck.pop()];
            const newPlayerHand = [newDeck.pop(), newDeck.pop()];
            const dealerScore = score(newDealerHand);
            const playerScore = score(newPlayerHand);
            setDeck(newDeck);
            setDealerHand(newDealerHand);
            setPlayerHand(newPlayerHand);
          };

        const hit = () => {
            const newDeck = [...deck];
            const newPlayerHand = [...playerHand, newDeck.pop()];
            setDeck(newDeck);
            setPlayerHand(newPlayerHand);
        };
            
        
          

        useEffect(() => {
            setDeck(createDeck());
          }, []);
        return(

            <div>
                    <Header/>   
                <h1>Wecome to BlackJack</h1>
                
                <button onClick={dealCards}>Deal</button>
                <div className="dealer-hand">
                    <h2>Dealer's Hand</h2>
                    <p>Card Count {score(dealerHand)}</p>
                    <div className='dealer-cards'>
                            {dealerHand.map((card, index) => (
                        <img key={index} src={`${process.env.PUBLIC_URL}/cards/${card.imageUrl}`} alt={`${card.value}-${card.suit}`} /> 
                        ))}
                    </div>
                
                </div>
                <div className="player-hand">
                    <h2>Player's Hand</h2>
                    <p>Card Count {score(playerHand)}</p>
                    <div className='player-cards'>
                            {playerHand.map((card, index) => (
                        <img key={index} src={`${process.env.PUBLIC_URL}/cards/${card.imageUrl}`} alt={`${card.value}-${card.suit}`} /> 
                        ))}
                    </div>
                    <button onClick={hit}>Hit</button>
                    <button>Stand</button>
                    
                
                </div>
            </div>
        )
};
export default BlackJack;
