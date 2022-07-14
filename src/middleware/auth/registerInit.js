import { defaultAuth } from "../../firebase/firebase";
import { registerStart, registerSuccess, registerError } from "../../redux/actions/actions";

export const registerInit = (userName, userEmail, userPassword) => {
    return(dispatch) => {
        dispatch(registerStart())
        defaultAuth 
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