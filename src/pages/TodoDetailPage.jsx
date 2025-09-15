import "../App.css"
import { useNavigate, useParams } from "react-router";
import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import TodoItem from "../components/TodoItem";


function TodoDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useContext(TodoContext);
  console.log("id" + id);
  console.log("state" + state);
  const todo = state.filter((todo) => todo.id === parseInt(id))
  if (todo.length === 0) {
    navigate(`/`);
  }
  return (
  <div className="App">
    <div className="todo-item-container">
    <TodoItem todo={todo[0]} />
  </div>
  </div>
)
}

export default TodoDetailPage;
