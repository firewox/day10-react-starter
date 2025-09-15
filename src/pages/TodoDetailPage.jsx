import "../App.css"
import { useNavigate, useParams } from "react-router";
import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import TodoItem from "../components/TodoItem";
import {List} from "antd";


function TodoDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useContext(TodoContext);
  const todo = state.filter((todo) => todo.id === id)
  if (todo.length === 0) {
    navigate(`/`);
  }
  return (
  <div className="App">
    <div className="todo-item-container">
      <List
          className="demo-loadmore-list"
          itemLayout="horizontal"
          dataSource={todo}
          renderItem={item => (
              <TodoItem todo={item} key={item.id} />
          )}
      />
  </div>
  </div>
)
}

export default TodoDetailPage;
