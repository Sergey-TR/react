import { defaultAuth } from "../../firebase/firebase";
import { logoutStart, logoutSuccess, logoutError } from "../../redux/actions/actions";

export const logoutInit = () => {
    return(dispatch) => {
        dispatch(logoutStart())
        defaultAuth
            .signOut()
            .then(() => dispatch(logoutSuccess()))
            .catch((err) => dispatch(logoutError(err)))
    }
}