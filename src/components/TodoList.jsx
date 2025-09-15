import TodoGroup from "./TodoGroup";
import TodoAdd from "./TodoAdd";
import {TodoContext,initState} from "../contexts/TodoContext";
import useReducer from "react";
import todoReducer from "../reducers/TodoReducer";

function TodoList(){
    return (
        <div className="App">
            
            <header>
                <h1>Todo List</h1>
            </header>
            <context>
                <TodoGroup />
                <TodoAdd />
            </context>
        </div>
    )
}

export default TodoList;