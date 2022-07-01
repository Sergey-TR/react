import {
    INCREMENT, 
    DECREMENT,
    GET_COMMENTS
} from "../types";

export const incrementCount = {
    type: INCREMENT
};

export const decrementCount = {
    type: DECREMENT
};

export function getComments() {
    return async dispatch => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
            const data = await res.json();
            dispatch({
            type: GET_COMMENTS,
            payload: data
            })
        } catch (e) {
            console.log(e.toString());
        }
    }
}
