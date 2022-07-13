import { REGISTER_START, REGISTER_SUCCESS, REGISTER_ERROR } from "../../types";
import { registerError, registerStart, registerSuccess } from "../../actions/actions";
import { auth } from "../../../firebase";

const initialState = {
    user: null,
    loading: false,
    error: null

}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_START:
            return {
                ...state,
                loading: true
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                loading: false
            }
        case REGISTER_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        default:
            return state
    }
}

export const registerInit = (userName, userEmail, userPassword) => {
    return(dispatch) => {
        dispatch(registerStart())
        auth 
            .createUserWithEmailAndPassword(userEmail, userPassword)
            .then(({user}) => {
                user.updateProfile({
                    userName
                })
                dispatch(registerSuccess(user))
            }) 
            .catch((err) => dispatch(registerError(err)))
    }
}