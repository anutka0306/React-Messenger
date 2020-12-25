import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';
import chatReducer from "./chatReducer";
import userReducer from "./userReducer";
import messageReducer from "./messageReducer";

export default (history) => combineReducers({
    router: connectRouter(history),
    chatReducer,
    userReducer,
    messageReducer,
});