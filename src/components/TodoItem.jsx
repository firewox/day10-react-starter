import { useContext } from "react";
import "../App.css"
import { TodoContext } from "../contexts/TodoContext"
import { useNavigate } from "react-router"; 

function TodoItem(props) {
  const navigate = useNavigate();
  const { dispatch } = useContext(TodoContext)
  function makeAsDone() {
    dispatch({
      type: "TOGGLE_TODO",
      payload: { id: props?.todo?.id }
    })
  }

  function deleteTodo() {
    dispatch({
      type: "DELETE_TODO",
      payload: { id: props.todo.id }
    })
  }

  function detailTodo() {
    //跳转到{
      //   path: "/todos/:id",
      //   element: <TodoDetailPage/>
      // }
    navigate(`/todos/${props.todo.id}`);
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
      <button className="detail-button" onClick={detailTodo}>Details</button>
      <button className="default-button" onClick={deleteTodo}>X</button>
    </div>
  )
}

export default TodoItem;