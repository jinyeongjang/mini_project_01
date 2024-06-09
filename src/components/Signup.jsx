import '../App.css';
import './Signup.css';
import { useState } from 'react';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setPasswordError('비밀번호가 일치하지 않습니다.');
            return;
        }
        setPasswordError('');
        // 회원가입 로직 추가
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        // 회원가입 API 호출 등의 추가 작업 수행
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
