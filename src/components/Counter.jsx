import { useState } from 'react';

function Counter(){
  const [count, setCount] = useState(3);
  function add(){
    setCount(count + 1);
  }
  function sub(){
    setCount(count - 1);
  }
  return (
    <div className="counter">
      <button onClick={sub}>-</button>
      <span>{count}</span>
      <button onClick={add}>+</button>
    </div>
  )
}

export default Counter;