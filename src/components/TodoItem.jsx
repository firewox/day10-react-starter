import {useContext, useEffect, useState} from "react";
import "../App.css"
import {TodoContext} from "../contexts/TodoContext"
import {useNavigate} from "react-router";
import {useTodoService} from "../useTodoService";
import {List, Typography} from 'antd';
import TodoEdit from "./TodoEdit";

const {Text, Link} = Typography;

function TodoItem(props) {
  const {putTodo, deleteTodoRequest} = useTodoService();
  const navigate = useNavigate();
  const { dispatch } = useContext(TodoContext)
  const [updatedTodoDone, setUpdatedTodoDone] = useState(props?.todo?.done);
  function makeAsDone() {
    putTodo(props).then((todo) => {
      dispatch({
        type: "UPDATE_TODO",
        payload: todo
      });
      props.todo = todo;
    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    setUpdatedTodoDone(props?.todo?.done)
  }, [props?.todo?.done]);

  function deleteTodo() {
    deleteTodoRequest(props).then((response) => {
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
      <List.Item
          actions={[<TodoEdit todo={props?.todo}/>,
            <a key="list-loadmore-details" onClick={detailTodo}>Details</a>,
            <button onClick={deleteTodo}>X</button>]}
      >
        <List.Item.Meta/>
        {/*<span className={props?.todo?.done ? "todo-done" : ""} onClick={}>{props?.todo?.text}</span>*/}
        <Text delete={updatedTodoDone} onClick={makeAsDone}>{props?.todo?.text}</Text>
      </List.Item>
  )
  // return (
  //   <div className="todo-item-container">
  //     <div className={"todo-item"}>
  //       <span
  //         className={
  //           props?.todo?.done ? "todo-done" : ""
  //         }
  //         onClick={makeAsDone}>
  //         {props?.todo?.text}
  //       </span>
  //     </div>
  //     <button className="detail-button" onClick={detailTodo}>Details</button>
  //     <button className="default-button" onClick={deleteTodo}>X</button>
  //   </div>
  // )
}

export default TodoItem;