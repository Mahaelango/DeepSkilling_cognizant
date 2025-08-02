import React, { useState } from 'react';

function GuestPage() {
  return (
    <div>
      <h2>Welcome, Guest!</h2>
      <p>You can browse available flights but need to log in to book tickets.</p>
      <ul>
        <li>✈️ Chennai → Delhi - ₹4500</li>
        <li>✈️ Mumbai → Bangalore - ₹4200</li>
        <li>✈️ Hyderabad → Kolkata - ₹3900</li>
      </ul>
    </div>
  );
}

function UserPage() {
  return (
    <div>
      <h2>Welcome, User!</h2>
      <p>You are logged in. You can now book tickets.</p>
      <button>Book Now</button>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  // Element variable example
  let pageContent;
  if (isLoggedIn) {
    pageContent = <UserPage />;
  } else {
    pageContent = <GuestPage />;
  }

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h1>🛫 Ticket Booking App</h1>

      {/* Conditional Button Rendering */}
      {isLoggedIn ? (
        <button onClick={handleLogout} style={{ marginBottom: '20px' }}>
          Logout
        </button>
      ) : (
        <button onClick={handleLogin} style={{ marginBottom: '20px' }}>
          Login
        </button>
      )}

      {/* Display Based on Login Status */}
      {pageContent}
    </div>
  );
}

export default App;
