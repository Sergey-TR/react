import { 
    combineReducers,
    createStore,
    compose,
    applyMiddleware
} from "redux";
import thunk from "redux-thunk";
import { chatReducer } from "./reducers/chatReducer/chatReducer";
import { counterReducer } from "./reducers/countReducer/counterReducer";
import { messageReducer } from "./reducers/messageReducer/messageReducer";
import { commentsReducer } from "./reducers/commentsReducer/commentsReducer";
import { loaderReducer } from "./reducers/loaderReducer/loaderReducer";
import { logger } from "../middleware/logger";
import { delay } from "../middleware/delay";

const rootReducer = combineReducers({
    chats: chatReducer,
    messages: messageReducer,
    count: counterReducer,
    comments: commentsReducer,
    loading: loaderReducer
})

export const store = createStore(rootReducer, compose(
    applyMiddleware(thunk, logger, delay),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));