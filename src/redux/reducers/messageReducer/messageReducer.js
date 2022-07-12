
const initialState = {
    messages: [
        {
            id: 1,
            chat_id: 1,
            body: 'some text chat 1 id 1',
            author: 'Author-1'
        },
        {
            id: 2,
            chat_id: 2,
            body: 'some text chat 2 id 2',
            author: 'Author-2'
        },
        {
            id: 3,
            chat_id: 3,
            body: 'some text chat 3 id 3',
            author: 'Author-3'
        },
        {
            id: 4,
            chat_id: 1,
            body: 'some text chat 1 id 4',
            author: 'Author-1'
        },
        {
            id: 5,
            chat_id: 2,
            body: 'some text chat 2 id 5',
            author: 'Author-2'
        },
        {
            id: 6,
            chat_id: 3,
            body: 'some text chat 3 id 6',
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