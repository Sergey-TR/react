import { ADD_COMMENT, DELETE_COMMENT } from "../../types";

const initialState = {
    messages: [
        {
            id: 1,
            chat_id: 1,
            body: 'some text chat 1',
            author: 'Author-1'
        },
        {
            id: 2,
            chat_id: 2,
            body: 'some text chat 2',
            author: 'Author-2'
        },
        {
            id: 3,
            chat_id: 3,
            body: 'some text chat 3',
            author: 'Author-3'
        }
    ]
};

export const messageReducer = (state = initialState, actions) => {
    switch(actions.type) {


        default:
            return state
    }
}