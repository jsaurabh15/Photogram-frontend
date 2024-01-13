import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { postReducer } from "./post/post.reducer";
import { messageReducer } from "./message/message.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer,
    message: messageReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))