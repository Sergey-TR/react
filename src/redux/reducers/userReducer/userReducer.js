import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT_START,
    LOGOUT_ERROR,
    LOGOUT_SUCCESS
}
from "../../types";

const initialState = {
    user: null,
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_START:
        case LOGIN_START:
        case LOGOUT_START:
            return {
                ...state,
                loading: true
            }
            case REGISTER_SUCCESS:
            case LOGIN_SUCCESS:
                return {
                    ...state,
                    user: action.payload,
                        loading: false
                }

                case LOGOUT_SUCCESS:
                    return {
                        ...state,
                        user: null
                    }

                    case REGISTER_ERROR:
                    case LOGIN_ERROR:
                    case LOGOUT_ERROR:
                        return {
                            ...state,
                            error: action.payload,
                                loading: false
                        }
                        default:
                            return state
    }
}

