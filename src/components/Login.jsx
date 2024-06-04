import React from 'react';
import './Login.css';

const LoginForm = () => {
    return (
        <div className="login-form-container">
            <form className="login-form">
                <h2>로그인</h2>
                <div className="form-group">
                    <input type="text" id="username" placeholder="아이디" />
                </div>
                <div className="form-group">
                    <input type="password" id="password" placeholder="비밀번호" />
                </div>
                <button type="submit">로그인</button>
            </form>
        </div>
    );
};

export default LoginForm;
