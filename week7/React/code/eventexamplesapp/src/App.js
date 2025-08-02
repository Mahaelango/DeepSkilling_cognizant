import React from 'react';
import CurrencyConvertor from './components/CurrencyConvertor';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: ''
    };
  }

  increment = () => {
    this.setState(
      prevState => ({ counter: prevState.counter + 1 }),
      () => this.sayHello()
    );
  };

  decrement = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1
    }));
  };

  sayHello = () => {
    this.setState({ message: 'Hello! You clicked increment.' });
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  handlePress = (event) => {
    alert('I was clicked');
    console.log('Synthetic event triggered:', event);
  };

  render() {
    return (
      <div style={{ padding: '30px', fontFamily: 'Arial' }}>
        <h1>🎯 React Event Handling Example</h1>

        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement} style={{ marginLeft: '10px' }}>Decrement</button>

        {this.state.message && <p>{this.state.message}</p>}

        <br /><br />
        <button onClick={() => this.sayWelcome('Welcome to the Event Handling App')}>
          Say Welcome
        </button>

        <br /><br />
        <button onClick={this.handlePress}>Synthetic OnPress</button>

        <br /><br />
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
