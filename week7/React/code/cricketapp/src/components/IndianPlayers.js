import React from 'react';


const IndianPlayers = () => {
  const T20Players = [
    'Virat Kohli',
    'Rohit Sharma',
    'Shubman Gill',
    'Hardik Pandya',
    'Ravindra Jadeja',
    'KL Rahul'
  ];

  const RanjiPlayers = [
    'Rishabh Pant',
    'Ajinkya Rahane',
    'Cheteshwar Pujara',
    'Ishant Sharma',
    'Umesh Yadav'
  ];

  // Merge both arrays — Total: 11 players
  const mergedPlayers = [...T20Players, ...RanjiPlayers];

  // Split into odd/even index-based teams
  const oddTeam = mergedPlayers.filter((_, index) => index % 2 === 0);
  const evenTeam = mergedPlayers.filter((_, index) => index % 2 !== 0);

  return (
    <div className="indian-players">
      <h2>Odd Team Players</h2>
      <ul>
        {oddTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
