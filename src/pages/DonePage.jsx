import {List} from "antd";
import TodoItem from "../components/TodoItem";
import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import TodoAdd from "../components/TodoAdd";

const DonePage = ()=> {
    const { state } = useContext(TodoContext);
    const doneTodos = state.filter(todo => todo.done);
    return (
        <div className="App">

            <header>
                <h1>Done Todo List</h1>
            </header>
            <context>
                <List
                    className="demo-loadmore-list"
                    itemLayout="horizontal"
                    dataSource={doneTodos}
                    renderItem={item => (
                        <TodoItem todo={item} key={item.id}/>
                    )}
                />
                <TodoAdd />
            </context>
        </div>
    )
}
export default DonePage;