import {
    INCREMENT, 
    DECREMENT,
    GET_COMMENTS,
    LOADER_DISPLAY_OFF,
    LOADER_DISPLAY_ON,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT_START,
    LOGOUT_SUCCESS,
    LOGOUT_ERROR
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

export const registerStart = () => ({
    type: REGISTER_START
})

export const registerSuccess = (user) => ({
    type: REGISTER_SUCCESS,
    payload: user
})

export const registerError = (err) => ({
    type: REGISTER_ERROR,
    payload: err.toString()
})

export const loginStart = () => ({
    type: LOGIN_START
})

export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user
})

export const loginError = (err) => ({
    type: LOGIN_ERROR,
    payload: err.toString()
})

export const logoutStart = () => ({
    type: LOGOUT_START
})

export const logoutSuccess = (user) => ({
    type: LOGOUT_SUCCESS
})

export const logoutError = (err) => ({
    type: LOGOUT_ERROR
})
