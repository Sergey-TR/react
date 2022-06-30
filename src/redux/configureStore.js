import { 
    combineReducers,
    createStore,
    applyMiddleware
} from "redux";
import { chatReducer } from "./reducers/chatReducer/chatReducer";
import { counterReducer } from "./reducers/countReducer/counterReducer";
import { messageReducer } from "./reducers/messageReducer/messageReducer";
import { logger } from "../middleware/logger";
import { delay } from "../middleware/delay";

const rootReducer = combineReducers({
    chats: chatReducer,
    messages: messageReducer,
    count: counterReducer
})

export const store = createStore(rootReducer, applyMiddleware(logger, delay));