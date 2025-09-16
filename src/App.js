import "./App.css"
import todoReducer from "./reducers/TodoReducer";
import {useEffect, useReducer} from "react";
import {initState, TodoContext} from "./contexts/TodoContext";
import TodoRouter from "./router/TodoListRouter";
import {useTodoService} from "./useTodoService";
import { unstableSetRender } from 'antd';
import { createRoot } from 'react-dom/client';

unstableSetRender((node, container) => {
    container._reactRoot ||= createRoot(container);
    const root = container._reactRoot;
    root.render(node);
    return async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
        root.unmount();
    };
});

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