import {createContext, useContext, useReducer} from "react";
import "../App.css"
import {TodoContext} from "../contexts/TodoContext"

function TodoItem(props) {
  const {dispatch} = useContext(TodoContext)
  function makeAsDone(){
      dispatch({
        type:"TOGGLE_TODO",
        payload:{id:props.todo.id}
      })
  }
  return <div className={"todo-item"}>
    <span 
    className={
      props.todo.done ? "todo-done" : ""
    }
    onClick={makeAsDone}>
      {props.todo.text}
    </span>
  </div>
}

export default TodoItem;