import TodoGroup from "./TodoGroup";
import TodoAdd from "./TodoAdd";
import {TodoContext} from "../contexts/TodoContext";

function TodoList({state, dispatch}){
    return (
        <div className="App">
            <TodoContext.Provider value={{ state, dispatch }}>
                <header>
                    <h1>Todo List</h1>
                </header>
                <context>
                    <TodoGroup />
                    <TodoAdd />
                </context>
            </TodoContext.Provider>
        </div>
    )
}

export default TodoList;