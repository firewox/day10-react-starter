import { useReducer } from "react";
import "./App.css"
import { TodoContext, initState } from "./contexts/TodoContext"
import todoReducer from "./reducers/TodoReducer"
import TodoGroup from "./components/TodoGroup"
import TodoAdd from "./components/TodoAdd"

function App() {
  const [state, dispatch] = useReducer(todoReducer, initState);
  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
        <header>
          <h1>Todo List</h1>
        </header>
        <context>
          <TodoGroup />
          <TodoAdd />
        </context>
      </TodoContext.Provider>
    </div>
  );
}

export default App;