import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { useState } from 'react';


function CounterGroupGenerator({count, handleCountChange}){
  function updateSize(event){
    let number = parseInt(event.target.value);
    if (!Number.isNaN(number)){
      handleCountChange(number);
    }
  }
  function reset(){
    handleCountChange(0);
  }
  return (
    <div>
      <span>size:</span>
      <input type="number" value={count} onChange={updateSize}/>
      <input type="button" value="reset" onClick={reset}/>
    </div>
  )
}

function CounterGroup({count, handleCountChange, countSize}){
  return <div>
    {
      new Array(countSize).fill(1).map((item, index) => {
        return <Counter count={count} handleCountChange={handleCountChange} key={index}/>
      })
    }
  </div>
}

function MultipleCounter(){
  const [count, setCount] = useState(1);
  const [countSize, setCountSize] = useState(10);
  function handleCountChange(newCount){
    setCount(newCount);
  }
  return <div>
    <CounterGroupGenerator count={count} handleCountChange={handleCountChange}/>
    <CounterGroup count={count} handleCountChange={handleCountChange} countSize={countSize}/>
  </div>
}


function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      <MultipleCounter/>
      </div>
  );
}

export default App;
