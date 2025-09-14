import {createContext} from "react";
import "../App.css"

export const initState = [
    {id: 1, text: "the first todo", done: true},
    {id: 2, text: "the second todo", done: true},
];
export const TodoContext = createContext()