
import {useContext} from "react";
import "../App.css"
import { TodoContext } from "../contexts/TodoContext"
import TodoItem from "./TodoItem"
import { List  } from 'antd';

function TodoGroup() {
    const { state } = useContext(TodoContext);

    return (
        <div>
            <List
                className="demo-loadmore-list"
                itemLayout="horizontal"
                dataSource={state}
                renderItem={item => (
                    <TodoItem todo={item} key={item.id}/>
                )}
            />
            {/*{state.map((item, index) => {*/}
            {/*    return <TodoItem todo={item} key={index} index={index} />*/}
            {/*})}*/}
        </div>
    );
}

export default TodoGroup