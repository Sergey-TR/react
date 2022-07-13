import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerInit } from "../../redux/reducers/userReducer/userReducer";
import { getUser } from "../../redux/reducers/userReducer/userSelector";

const Register = () => {

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const user = useSelector(getUser);
    console.log(user)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (userPassword !== confirmPassword) {
            alert('ПАРОЛИ НЕ СОВПАДАЮТ');
            return;
        }
        
       dispatch(registerInit(userName, userEmail, userPassword))
    }

    return (
        <div className="wrapper">
            <div className="wrapperBox">
                <h3 className="auth-h3">Регистрация</h3>

                <form className="authForm" onSubmit={handleSubmit}>

                    <input className="authInput" type='text' placeholder='your name'
                    value={userName} onChange={(e) => setUserName(e.target.value)}></input>

                    <input className="authInput" type='email' placeholder='example@mail.com'
                    value={userEmail} onChange={(e) => setUserEmail(e.target.value)}></input>

                    <input className="authInput" type='password' placeholder='your password'
                    value={userPassword} onChange={(e) => setUserPassword(e.target.value)}></input>
                    
                    <input className="authInput" type='password' placeholder='confirm password'
                    value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>

                    <button className="authBtn" type="submit">Зарегистрироваться</button>

                </form>
            </div>   
        </div>
    )
};

export default Register;