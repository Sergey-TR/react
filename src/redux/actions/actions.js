import {
    INCREMENT, 
    DECREMENT,
    GET_COMMENTS,
    LOADER_DISPLAY_OFF,
    LOADER_DISPLAY_ON
} from "../types";

export const incrementCount = {
    type: INCREMENT
};

export const decrementCount = {
    type: DECREMENT
};

export function loaderOn() {
    return {
        type: LOADER_DISPLAY_ON
    }
}

export function loaderOff() {
    return {
        type: LOADER_DISPLAY_OFF
    }
}

export function getComments() {
    return async dispatch => {
        try {
            dispatch(loaderOn())
            const res = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
            const data = await res.json();
            setTimeout(() => {
                dispatch({
                    type: GET_COMMENTS,
                    payload: data
                    });
                dispatch(loaderOff())
            }, 1500)
            
        } catch (e) {
            console.log(e.toString());
        }
    }
}
