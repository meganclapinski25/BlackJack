import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Home from './Home';
import { Router, Routes, Route } from "react-router-dom";
import Blackjack from './BlackJack';


function App() {
  return (
    <div className="App">
      <Home />
      <Footer />
    </div>
  );
}

export default App;
