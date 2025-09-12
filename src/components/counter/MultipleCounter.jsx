import React, {useContext, useState} from 'react';
import CounterGroupGenerator from './CounterGroupGenerator';
import CounterGroup from './CounterGroup';
import {CounterContext} from '../../App';

function MultipleCounter(){
  const {count,setCount} = useContext(CounterContext);
  function handleCountChange(newCount){
    // setCount(newCount);
    console.log(newCount);
    setCount(newCount);
  }
  return <div>
    <CounterGroupGenerator count={count} handleCountChange={handleCountChange}/>
    <CounterGroup handleCountChange={handleCountChange} count={count}/>
  </div>
}
export default MultipleCounter;