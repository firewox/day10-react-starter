import { TodoContext } from "../contexts/TodoContext";
import { useContext } from "react";
import { useRef } from "react";

function TodoAdd() {
    const {dispatch} = useContext(TodoContext);
    const inputRef = useRef(null); 
    function addTodoItem() {
        const text = inputRef.current.value.trim();
        if (text!=="") {
            dispatch({
                type:"ADD_TODO",
                payload:{text:text}
            })
        }
        inputRef.current.value = "";
    }
    return (
        <div className="todo-add-container">
        <input className="todo-item" type="text" placeholder="add todo" ref={inputRef}/>
        <button className="default-button add-button" onClick={addTodoItem}>add</button>
        </div>
    );
}

export default TodoAdd;
