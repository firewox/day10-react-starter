import {useContext} from "react";
import "../App.css"
import {TodoContext} from "../contexts/TodoContext"
import {useNavigate} from "react-router";
import {api} from "../api/mockApi";

function TodoItem(props) {
  const navigate = useNavigate();
  const { dispatch } = useContext(TodoContext)
  function makeAsDone() {
    api.put(`/todos/${props?.todo?.id}`, {done: !props?.todo?.done}).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: "TOGGLE_TODO",
          payload: {id: props?.todo?.id}
        })
      }
    }).catch((error) => {
      console.log(error);
    })
  }

  function deleteTodo() {
    api.delete(`/todos/${props?.todo?.id}`).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: "DELETE_TODO",
          payload: {id: props?.todo?.id}
        })
      }
    }).catch((error) => {
      console.log(error);
    })
  }

  function detailTodo() {
    //跳转到{
      //   path: "/todos/:id",
      //   element: <TodoDetailPage/>
      // }
    navigate(`/todos/${props?.todo?.id}`);
  }

  return (
    <div className="todo-item-container">
      <div className={"todo-item"}>
        <span
          className={
            props?.todo?.done ? "todo-done" : ""
          }
          onClick={makeAsDone}>
          {props?.todo?.text}
        </span>
      </div>
      <button className="detail-button" onClick={detailTodo}>Details</button>
      <button className="default-button" onClick={deleteTodo}>X</button>
    </div>
  )
}

export default TodoItem;