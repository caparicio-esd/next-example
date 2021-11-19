

const initialState = [
    "hola",
    "la colada"
]



const addTodo = (state, newTodo) => {
    const newState = [...state]
    newState.push(newTodo)
    state = newState
    return state
}


const todoReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case 'todo/addTodo':
            state = addTodo(state, action.payload.newTodo)
            break
        case 'todo/removeTodo':
            newState = [...state]
            newState.splice(action.payload.todoId, 1)
            state = newState
            break
        case 'todo/clearTodos':
            state = []
            break
        case 'todo/editTodo':
            newState = [...state]
            newState.splice(action.payload.todoId, 1, action.payload.newTodo)
            state = newState
            break

        default:
    }
    return state
}


export default todoReducer