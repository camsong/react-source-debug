import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('John Doe');

  useEffect(() => {
    debugger;
    console.log('useEffect called');
  }, [counter]);

  const handleAddClick = () => {
    setCounter(counter + 1);
  };

  const handleMinClick = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>counter: {counter}</p>
        <div>
          <button onClick={handleAddClick}>+</button>
          <button onClick={handleMinClick}>-</button>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
