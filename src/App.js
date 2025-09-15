import "./App.css"
import todoReducer from "./reducers/TodoReducer";
import {useEffect, useReducer} from "react";
import {initState, TodoContext} from "./contexts/TodoContext";
import TodoRouter from "./router/TodoListRouter";
import {useTodoService} from "./useTodoService";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initState);
  const {loadTodos} = useTodoService();
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