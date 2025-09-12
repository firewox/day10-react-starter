import React, {useState} from 'react';
import CounterGroupGenerator from './CounterGroupGenerator';
import CounterGroup from './CounterGroup';

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
export default MultipleCounter;