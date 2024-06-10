import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import './LoginPage.css';
import { auth } from '../../firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailLogin = async (e) => {
        e.preventDefault();
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            const user = result.user;
            console.log(user);
            alert('로그인되었습니다');
            navigate('/');
        } catch (error) {
            console.error(error);
            alert('이메일 또는 비밀번호가 올바르지 않습니다.');
        }
    };

    return (
        <div className="login-form-container">
            <form className="login-form" onSubmit={handleEmailLogin}>
                <h2>로그인</h2>
                <div className="form-group">
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일" required />
                </div>
                <div className="form-group">
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호" required />
                </div>
                <button type="submit" className="login-button">
                    로그인
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
