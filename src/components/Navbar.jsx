import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../public/images/logo.png'; // 로고 이미지 파일을 import

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="로고" className="navbar-logo" /> {/* 로고 이미지 추가 */}
                <h1 className="navbar-title">미니프로젝트 1번</h1>
            </div>

            <ul className="navbar-links">
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/Signup">회원가입</Link>
                </li>
                <li>
                    <Link to="/Login">로그인</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
