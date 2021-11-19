export const addTodo = (newTodo) => {
    //
    return {
        type: "todo/addTodo",
        payload: {
            newTodo
        }
    }
}
export const removeTodo = (id) => {
    //
    return {
        type: "todo/removeTodo",
        payload: {
            todoId: id
        }
    }
}