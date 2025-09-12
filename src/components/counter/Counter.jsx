import { useState } from 'react';

function Counter({handleCountChange}){
  let flag = 0;
//   const [count, setCount] = useState(3);
  function add(){
    // handleCountChange(count+1);
    flag = flag + 1;
  }
  function sub(){
    flag = flag - 1;
  }
  return (
    <div className="counter">
      <button onClick={sub}>-</button>
      <span>{flag}</span>
      <button onClick={add}>+</button>
    </div>
  )
}

export default Counter;