import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useLocation import 제거
import './Navbar.css';
import logo from '../public/images/logo.png';

const NavBar = () => {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        if (value.trim() === '') {
            navigate('/');
        } else {
            navigate(`/search?q=${value}`);
        }
    };

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
            <div className="navbar-left">
                <img src={logo} alt="로고" className="navbar-logo" />
                <h1 className="navbar-title">미니프로젝트(영화 웹 애플리케이션)</h1>
            </div>
            <div className="search-container">
                <input value={searchValue} onChange={handleChange} className="search-input" type="text" placeholder="검색어를 입력하세요." />
                <button className="search-button">검색</button>
            </div>

            <div className="menu-toggle" onClick={toggleMenu}>
                <div className={`menu-icon ${menuOpen ? 'open' : ''}`}></div>
            </div>

            <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                <li>
                    <a href="/">홈</a>
                </li>
                <li>
                    <a href="/Signup">회원가입</a>
                </li>
                <li>
                    <a href="/Login">로그인</a>
                </li>
            </ul>
            <div className="theme-toggle">
                <label className="switch">
                    <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
                    <span className="slider round"></span>
                </label>
            </div>
        </nav>
    );
};

export default NavBar;
