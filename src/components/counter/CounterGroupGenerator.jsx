import React from 'react';
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
export default CounterGroupGenerator;