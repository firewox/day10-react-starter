import {TodoContext} from "../contexts/TodoContext";
import {useContext, useRef} from "react";
import {useTodoService} from "../useTodoService";



function TodoAdd() {
    const {postTodos} = useTodoService();
    const {dispatch} = useContext(TodoContext);
    const inputRef = useRef(null); 
    function addTodoItem() {

        const text = inputRef.current.value.trim();
        if (text) {
            postTodos(text)
                .then(data => {
                    dispatch({type: "ADD_TODO", payload: data})
                }).catch(error => {
                console.log(error);
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
