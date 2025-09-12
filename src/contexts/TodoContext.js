import {createContext, useContext, useReducer} from "react";
import "../App.css"
import { type } from "@testing-library/user-event/dist/type";

export const initState = [
    {id: 1, text: "the first todo", done: true},
    {id: 2, text: "the second todo", done: true},
];
export const TodoContext = createContext()