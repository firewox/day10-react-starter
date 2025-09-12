import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter';
import { useReducer, useState } from 'react';
import MultipleCounter from './components/counter/MultipleCounter';
import React from 'react';


const CounterContext = React.createContext();
const initState1 = {
    count:5,
  };

function counterReducer(state, action) {
  switch (action.type) {
    case "UPDATE_SUZE":
      return {count: action.payload.count};
    default:
      return state;
  }
}

function App_Context() {
  // 使用 useState 管理 count 状态
  const [count, setCount] = useState(5);

  // 创建 Context 的值对象，包含状态和更新函数
  const initState = {
    count,
    setCount // 提供更新函数
  };
  return (
    <div className="App">
      {/* <Counter/> */}
      <CounterContext.Provider value={initState}>
        <MultipleCounter/>
      </CounterContext.Provider>
      </div>
  );
}


function App(){
  const [state, dispatch] = useReducer(counterReducer, initState1);
  return (
    <div className="App">
      {/* <Counter/> */}
      <CounterContext.Provider 
          value={{
                state:state, 
                dispatch:dispatch,
              }}>
        <MultipleCounter/>
      </CounterContext.Provider>
      </div>
  );
}

export default App;
export {CounterContext};
