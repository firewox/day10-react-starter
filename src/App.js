import "./App.css"
import todoReducer from "./reducers/TodoReducer";
import {useEffect, useReducer} from "react";
import {initState, TodoContext} from "./contexts/TodoContext";
import TodoRouter from "./router/TodoListRouter";
import {api} from "./api/mockApi";

const loadTodos = () => {
    return api.get("/todos").then(response => response.data)
}

function App() {
  const [state, dispatch] = useReducer(todoReducer, initState);
    useEffect(() => {
        loadTodos().then(data => {
            console.log(data);
            dispatch({type: "SET_TODOS", payload: data});
        }).catch(error => {
            console.log(error)
        })
    }, [dispatch]);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <TodoRouter />
    </TodoContext.Provider>
  );
}

export default App;