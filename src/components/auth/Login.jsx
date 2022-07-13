import React from "react";

const Login = () => {
    return (
        <div className="wrapper">
            <div className="wrapperBox">
                <h3 className="auth-h3">ВХОД</h3>

                <form className="authForm">

                    <input className="authInput" type='email' placeholder='your email'
                    ></input>

                    <input className="authInput" type='password' placeholder='your password'
                    ></input>

                    <button className="authBtn" type="submit">ВОЙТИ</button>

                </form>
            </div>   
        </div>
    )
};

export default Login;