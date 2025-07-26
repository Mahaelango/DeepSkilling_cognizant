import React from 'react';
import './App.css';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div className="App">
      <h1>My Academy Dashboard</h1>
      <CohortDetails
        name="React Fundamentals"
        status="Ongoing"
        startDate="01-Jul-2025"
        endDate="31-Jul-2025"
      />
      <CohortDetails
        name="Java Advanced"
        status="Completed"
        startDate="01-Jun-2025"
        endDate="30-Jun-2025"
      />
    </div>
  );
}

export default App;
