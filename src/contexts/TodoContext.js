import {createContext} from "react";
import "../App.css"
import axios from "axios";

export const initState = []
// [
//     {id: 1, text: "the first todo", done: true},
//     {id: 2, text: "the second todo", done: true},
// ];
// export const initState = await axios.get("https://68c7ac595d8d9f514732862a.mockapi.io/todos").then(response=>response.data)
export const TodoContext = createContext()