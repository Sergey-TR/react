import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import { loginInit } from "../../middleware/auth/loginInit";
import { getUser } from "../../redux/reducers/userReducer/userSelector";
import { useEffect } from "react";
import { defaultAuth } from "../../firebase/firebase";

const Login = () => {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const dispatch = useDispatch();
    const user = useSelector(getUser);

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/profile')
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userEmail || !userPassword) {
            alert('ВВЕДИТЕ КОРРЕКТНЫЕ ПОЧТУ И ПАРОЛЬ');
            return;
        }
        dispatch(loginInit(userEmail, userPassword))
    }

    return (
        <div className="wrapper">
            <div className="wrapperBox">
                <h3 className="auth-h3">ВХОД</h3>

                <form className="authForm" onSubmit={handleSubmit}>

                    <input className="authInput" type='email' placeholder='your email'
                    value={userEmail} onChange={(e) => setUserEmail(e.target.value)}
                    ></input>

                    <input className="authInput" type='password' placeholder='your password'
                    value={userPassword} onChange={(e) => setUserPassword(e.target.value)}
                    ></input>

                    <div className="chat-box">
                        <button className="authBtn" type="submit">ВОЙТИ</button>
                        <button className="googleBtn"><GoogleIcon color="primary"/></button>
                    </div>

                </form>
            </div>   
        </div>
    )
};

export default Login;