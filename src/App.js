import logo from './logo.svg';
import './App.css';
import { useState, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return 100;
    default:
      throw new Error('Unexpected action');
  }
};

function App() {
  const [count1, setCounter] = useState(0);
  const [count2, dispatch] = useReducer(reducer, 100);

  return (
    <div className="App">
      <header className="App-header">
        <p>counter 1 = {count1}</p>
        <div>
          <button onClick={() => setCounter((count) => count + 1)}>+1</button>
          <button onClick={() => setCounter((count) => count - 1)}>-1</button>
        </div>
        <p>counter 2 = {count2}</p>
        <div>
          <button onClick={() => dispatch('increment')}>+1</button>
          <button onClick={() => dispatch('decrement')}>-1</button>
          <button onClick={() => dispatch('reset')}>reset</button>
        </div>
      </header>
    </div>
  );
}

export default App;
