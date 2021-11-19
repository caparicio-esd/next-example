import { combineReducers, createStore } from "redux";
import todoReducer from "./todos/todoReducer";
import userReducer from "./users/userReducer";

const reducers = combineReducers({
    todo: todoReducer, 
    users: userReducer
})

const store = createStore(reducers)
export default store




