import { useNavigate } from 'react-router-dom';
import '../App.css';
import './LoginPage.css';
import { auth, provider } from '../../firebase.js';
import { signInWithPopup } from 'firebase/auth';

const LoginForm = () => {
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result.user);
            alert('로그인되었습니다');
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

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
                <button type="submit" className="login-button">
                    로그인
                </button>
                <div>
                    <button type="button" className="google-login-button" onClick={handleGoogleLogin}>
                        Google 로그인
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
