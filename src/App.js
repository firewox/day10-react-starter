import { createContext, useContext, useReducer } from "react";
import "./App.css"
import {TodoContext, initState} from "./contexts/TodoContext"
import todoReducer from "./reducers/TodoReducer"
import TodoGroup from "./components/TodoGroup"


function App() {
  const [state, dispatch] = useReducer(todoReducer, initState);
  return (
    <div>
      <TodoContext.Provider value={{ state, dispatch }}>
        <TodoGroup />
      </TodoContext.Provider>
    </div>
  );
}

export default App;