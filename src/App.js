import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter';
import { useState } from 'react';
import MultipleCounter from './components/counter/MultipleCounter';


function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      <MultipleCounter/>
      </div>
  );
}

export default App;
