import { defaultAuth } from "../../firebase/firebase";
import { loginStart, loginSuccess, loginError } from "../../redux/actions/actions";

export const loginInit = (userEmail, userPassword) => {
    return(dispatch) => {
        dispatch(loginStart())
        defaultAuth
            .signInWithEmailAndPassword(userEmail, userPassword)
            .then(({user}) => {
                dispatch(loginSuccess(user))
            })
            .catch((err) => dispatch(loginError(err)))
    }
}