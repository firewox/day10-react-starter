

function todoReducer(state, action) {
    switch (action.type) {
        case "SET_TODOS":
            return action.payload;
        case "ADD_TODO":
            const newTodo = { id: action.payload.id, text: action.payload.text, done: action.payload.done };
            return [...state, newTodo];
        case "UPDATE_TODO":
            return state.map((value) => {
                if (value.id === action.payload.id) {
                    return action.payload
                }
                return value
            });
        case "TOGGLE_TODO":
            /// copy
            const newState = [...state];
            const id = action.payload.id;
            return newState.map((value) => {
                if (value.id === id) {
                    return {
                        id,
                        text: value.text,
                        done: !value.done
                    };
                }

                return value
            })
        case "DELETE_TODO":
            return state.filter((value) => value.id !== action.payload.id);
        default:
            return state;
    }
}

export default todoReducer;