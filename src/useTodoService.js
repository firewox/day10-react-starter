import {api} from "./api/mockApi";

export function useTodoService() {
    const loadTodos = () => {
        return api.get("/todos").then(response => response.data)
    }
    const putTodo = (props) => {
        return api.put(`/todos/${props?.todo?.id}`, {text: props?.todo?.text, done: !props?.todo?.done}).then(response => response.data);
    }

    const deleteTodoRequest = (props) => {
        return api.delete(`/todos/${props?.todo?.id}`).then((response) => response);
    }

    const postTodos = (text) => {
        return api.post("/todos", {text: text, done: false}).then(response => response.data);
    }
    const updateTodoName = (props) => {
        console.log("props,",props);
        return api.put(`/todos/${props?.todo?.id}`, {text: props?.todo?.text, done: props?.todo?.done}).then(response => response.data);
    }
    return {
        loadTodos,
        putTodo,
        deleteTodoRequest,
        postTodos,
        updateTodoName
    }
}
