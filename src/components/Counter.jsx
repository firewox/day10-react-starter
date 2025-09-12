import { useState } from 'react';

function Counter({count,handleCountChange}){
//   const [count, setCount] = useState(3);
  function add(){
    handleCountChange(count+1);
  }
  function sub(){
    handleCountChange(count - 1);
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