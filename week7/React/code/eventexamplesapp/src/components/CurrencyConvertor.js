import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rupees || isNaN(rupees)) {
      alert('Please enter a valid number in rupees');
      return;
    }

    const euroValue = (parseFloat(rupees) / 90).toFixed(2);
    setEuro(euroValue);
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>💱 Currency Converter</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter amount in Rupees:</label>
        <input
          type="text"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          style={{ marginLeft: '10px', marginRight: '10px' }}
        />
        <button type="submit">Convert</button>
      </form>

      {euro && <p>Converted to Euro: €{euro}</p>}
    </div>
  );
};

export default CurrencyConvertor;
