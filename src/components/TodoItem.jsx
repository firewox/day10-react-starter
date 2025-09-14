import { useContext } from "react";
import "../App.css"
import { TodoContext } from "../contexts/TodoContext"

function TodoItem(props) {
  const { dispatch } = useContext(TodoContext)
  function makeAsDone() {
    dispatch({
      type: "TOGGLE_TODO",
      payload: { id: props.todo.id }
    })
  }

  function deleteTodo() {
    dispatch({
      type: "DELETE_TODO",
      payload: { id: props.todo.id }
    })
  }

  return (
    <div className="todo-item-container">
      <div className={"todo-item"}>
        <span
          className={
            props.todo.done ? "todo-done" : ""
          }
          onClick={makeAsDone}>
          {props.todo.text}
        </span>
      </div>
      <button className="delete-button" onClick={deleteTodo}>X</button>
    </div>
  )
}

export default TodoItem;