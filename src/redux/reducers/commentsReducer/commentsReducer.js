import { GET_COMMENTS } from "../../types"


const initialState = {
    comments: []
}

export const commentsReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload
            }

        default:
            return state
    }
}