import { ADD_CHAT, GET_CHAT, DELETE_CHAT } from "../../types"

const initialState = {

    chats: [
        {
            id: 1,
            name: 'JavaScript'
        },
        {
            id: 2,
            name: 'Vue.js'
        },
        {
            id: 3,
            name: 'React.js'
        }
    ]
} 

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHAT:
            return {
                ...state,
                chats: state.chats
            }
        case ADD_CHAT:
            return {
                ...state,
                chats: [...state.chats, action.payload]
            }
        case DELETE_CHAT:
            return {
                ...state,
                chats: state.chats.filter((chat) => chat.id !== action.payload)
            }

        default:
            return state
    }
}
    