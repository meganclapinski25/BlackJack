import React from 'react';
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Blackjack from './BlackJack';
import Contact from './Contact';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <Router>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blackjack" element={<Blackjack />} />
        <Route path='/contact' element={<Contact />}/>
   </Routes>
</Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
