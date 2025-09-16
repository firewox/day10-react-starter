import React, {useContext, useState} from 'react';
import {Input, Modal} from 'antd';
import {useTodoService} from "../useTodoService";
import {TodoContext} from "../contexts/TodoContext";


export const TodoEdit = ({todo}) => {
    const {updateTodoName} = useTodoService();
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [inputValue, setInputValue] = useState(todo?.text || "");
    const {dispatch} = useContext(TodoContext);
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setConfirmLoading(true);
        if (inputValue === "") {
            setOpen(false);
            setConfirmLoading(false);
        }
        updateTodoName({todo: {id:todo?.id, text:inputValue}}).then((todo) => {
            dispatch({
                type: "UPDATE_TODO",
                payload: todo
            })
            setInputValue(todo?.text);
            setOpen(false);
            setConfirmLoading(false);
        });
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 200);
    };
    const handleCancel = () => {
        setOpen(false);
    }
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    return (
        <>
            <a key="list-loadmore-edit" onClick={showModal}>Edit</a>
            <Modal
                title="Edit"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
            <Input value={inputValue} placeholder="You can rename this todo." onChange={handleInputChange}/>
            </Modal>
        </>
    );
};
export default TodoEdit;