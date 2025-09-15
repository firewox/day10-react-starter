import "./App.css"
import { NavLink, Outlet, RouterProvider, createBrowserRouter, useParams, useRouteError } from "react-router";
import  todoReducer  from "./reducers/TodoReducer";
import {useReducer} from "react";
import { TodoContext,initState } from "./contexts/TodoContext";
import TodoRouter from "./router/TodoListRouter";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <TodoRouter />
    </TodoContext.Provider>
  );
}

export default App;