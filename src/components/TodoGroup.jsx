
import { useContext } from "react";
import "../App.css"
import {TodoContext} from "../contexts/TodoContext"
import TodoItem from "./TodoItem"

function TodoGroup() {
    const { state, dispatch } = useContext(TodoContext);
    return (
        <div>
            {state.map((item, index) => {
                return <TodoItem todo={item} key={index} index={index} />
            })}
        </div>
    );
}

export default TodoGroup