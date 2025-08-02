// src/App.js
import React from 'react';
import './App.css';
import ListOfPlayers from './components/ListOfPlayers';
import IndianPlayers from './components/IndianPlayers';

function App() {
  const flag = false; // Change to false to show IndianPlayers

  return (
    <div className="app-container">
      <h1>🏏 Welcome to Cricket App</h1>
      {flag ? <ListOfPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
