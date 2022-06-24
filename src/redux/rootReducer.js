import { combineReducers } from "redux";
import { counterReducer } from "./reducers/countReducer/counterReducer";
import { chatReducer } from "./reducers/chatReducer/chatReducer";
import { messageReducer } from "./reducers/messageReducer/messageReducer";

export const rootReducer = combineReducers({
    counterReducer,
    chatReducer,
    messageReducer
});
