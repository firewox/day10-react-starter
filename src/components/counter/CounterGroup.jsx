import Counter from "./Counter";

function CounterGroup({count, handleCountChange, countSize}){
  return <div>
    {
      new Array(countSize).fill(1).map((item, index) => {
        return <Counter count={count} handleCountChange={handleCountChange} key={index}/>
      })
    }
  </div>
}
export default CounterGroup;