// src/components/ListOfPlayers.js
import React from 'react';

const ListOfPlayers = () => {
  const players = [
    { name: 'Virat Kohli', score: 90 },
    { name: 'Rohit Sharma', score: 45 },
    { name: 'Shubman Gill', score: 80 },
    { name: 'Hardik Pandya', score: 67 },
    { name: 'Ravindra Jadeja', score: 72 },
    { name: 'KL Rahul', score: 34 },
    { name: 'Rishabh Pant', score: 55 },
    { name: 'Jasprit Bumrah', score: 20 },
    { name: 'Mohammed Shami', score: 85 },
    { name: 'Shreyas Iyer', score: 60 },
    { name: 'Kuldeep Yadav', score: 75 },
  ];

  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players with score below 70</h2>
      <ul>
        {below70.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfPlayers;
