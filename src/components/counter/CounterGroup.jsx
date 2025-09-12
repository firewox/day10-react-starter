import Counter from "./Counter";

function CounterGroup({handleCountChange, count}){
  return <div>
    {
      new Array(count).fill(1).map((item, index) => {
        return <Counter handleCountChange={handleCountChange} key={index}/>
      })
    }
  </div>
}
export default CounterGroup;