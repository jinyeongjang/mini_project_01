import '../App.css';
import './Signup.css';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.js';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setPasswordError('비밀번호가 일치하지 않습니다.');
            return;
        }
        setPasswordError('');

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('회원가입 성공:', user);
            alert('회원가입이 완료되었습니다!');
        } catch (error) {
            console.error('회원가입 실패:', error.message);
        }
    };

    return (
        <div className="signup-container">
            <h1>회원가입</h1>
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-group">
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required placeholder="이름" />
                </div>

                <div className="form-group">
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="이메일" />
                </div>
                <div className="form-group">
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="비밀번호" />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        placeholder="비밀번호 한번 더 입력"
                    />
                </div>
                {passwordError && <div className="error">{passwordError}</div>}
                <button type="submit" className="signup-button">
                    회원가입
                </button>
            </form>
        </div>
    );
};

export default Signup;
