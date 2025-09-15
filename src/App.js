import { useReducer } from "react";
import "./App.css"
import { initState } from "./contexts/TodoContext"
import todoReducer from "./reducers/TodoReducer"
import TodoList from "./components/TodoList";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initState);
  return (
      <TodoList state={state} dispatch={dispatch} />
  );
}

export default App;