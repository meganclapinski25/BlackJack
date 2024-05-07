import React, {useState, useEffect} from 'react';
import './BlackJack.css'
import Alert from 'react-bootstrap/Alert';
import Header from './Header';
import Footer from './Footer';

const BlackJack = () =>{
    const [deck, setDeck] = useState([]);
    const [dealerHand, setDealerHand] = useState([]);
    const [playerHand, setPlayerHand] = useState([]);
    const [gameMessage, setGameMessage] = useState('');
    const [betAmount, setBetAmount] = useState();
    const [initialAmount, setInitialAmount] = useState(500);
    
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

          const reset = () => {
            const newDeck = shuffle();
            const newDealerHand = [newDeck.pop(), newDeck.pop()];
            const newPlayerHand = [newDeck.pop(), newDeck.pop()];
            setDealerHand([]);
            setPlayerHand([]);
            setDeck(createDeck());
            setGameMessage( " ");
            setInitialAmount(500);
            
        }
        
        
            
            
              
              
            
           

        const hit = () => {
            const newDeck = [...deck];
            const newPlayerHand = [...playerHand, newDeck.pop()];
            setDeck(newDeck);
            setPlayerHand(newPlayerHand);
            
            
        };
        const stand = () => {
            let newDealerHand = [...dealerHand];

            while (score(newDealerHand) < 17) {
                const newDeck = [...deck];
                const newCard = newDeck.pop(); 
                newDealerHand.push(newCard); 
                setDeck(newDeck); 
              }
            
              setDealerHand(newDealerHand);
            
        
            
            const dealerScore = score(newDealerHand);
            const playerScore = score(playerHand);
        
            
            if (dealerScore > playerScore) {
                console.log("Dealer wins");
                console.log(dealerScore)
                console.log(playerScore)
                setGameMessage('Dealer Wins!')
                setInitialAmount( initialAmount );
            } else if (playerScore > dealerScore) {
                console.log("Player wins");
                console.log(dealerScore)
                console.log(playerScore)
                setGameMessage('Player Wins!')
                setInitialAmount( 2  * initialAmount);
            } else {
                console.log("You Tied");
                console.log(dealerScore)
                console.log(playerScore)
                setGameMessage('Tie!')
                setInitialAmount(initialAmount);
                
            }
        };

        const bet = () =>{
        
            if(betAmount > 0 && betAmount <= initialAmount){
                setInitialAmount(initialAmount - betAmount);
            }
        }
        

         useEffect(() => {
            const playerScore = score(playerHand);
            const dealerScore = score(dealerHand);
            if (playerScore > 21) {
                setGameMessage('Player Busts Dealer Wins!');
                setInitialAmount(initialAmount)
                
            } if (dealerScore > 21){
                setGameMessage ('Dealer Busts Player Wins!')
                setInitialAmount(initialAmount * 2 )
            } 
         },[dealerHand, playerHand]);
            
        
         

        useEffect(() => {
            setDeck(createDeck());
          }, []);
        return(

            <div>
                    <Header/>   
                <div>
                    <div className='bets'>
                        <p>Amount: {initialAmount}</p>
                        <form className='bet-amount'>
                            <p className='temp'>Bet Amount:</p>
                            <div className='bet-input'>
                                <input type='number' value={betAmount} onChange={(e) =>setBetAmount(e.target.value)}></input>
                                <button className='bet-button' onClick={bet}> Bet </button>
                            </div>
                            
                        </form>
                        
                    </div>
                        <h1>Wecome to BlackJack</h1>
                        <div className='deal-button-contain'>
                        <button className='deal-button' onClick={dealCards}>Deal</button>
                        </div>
                        <div className='alert'>
                           <h2>{gameMessage} </h2>
                        </div>
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
                            <div className='hit-stand-buttons'>
                            <button className = "hit-button" onClick={hit}>Hit</button>
                            <button className='stand-button' onClick = {stand}>Stand</button>
                            <button className='reset-button' onClick={reset}>Reset</button>
                            </div>
                        </div>
                        
                </div>
                <Footer />
            </div>
        )
};
export default BlackJack;
