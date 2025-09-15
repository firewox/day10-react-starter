import "../App.css"
import { NavLink, Outlet, RouterProvider, createBrowserRouter, useParams, useRouteError } from "react-router";
import { todoReducer, useReducer,useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import TodoItem from "../components/TodoItem";


function TodoDetailPage() {
  const {id} = useParams();
  const {state,dispatch} = useContext(TodoContext);
  console.log("id"+id);
  console.log("state"+state);
  const todo = state.filter((todo)=>todo.id===parseInt(id))
  if (todo.length===0) {
    return <div>Todo not found</div>
  }
  return <div>
    <TodoItem todo={todo[0]} />
  </div>
}

export default TodoDetailPage;
