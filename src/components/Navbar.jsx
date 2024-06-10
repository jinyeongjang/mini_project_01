import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Navbar.css';
import { auth } from '../../firebase.js';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import logo from '../public/images/logo.png';
import defaultUserAvatar from '../public/images/defaultUserAvatar.png'; // 기본 아바타 이미지

const NavBar = () => {
    const [searchValue, setSearchValue] = useState('');
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        if (value.trim() === '') {
            navigate('/');
        } else {
            navigate(`/search?q=${value}`);
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            alert('로그아웃되었습니다');
        } catch (error) {
            console.error(error);
        }
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
                {!user && (
                    <li>
                        <a href="/Signup">회원가입</a>
                    </li>
                )}
                <li>
                    {user ? (
                        <div className="user-info" onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
                            <img src={user.photoURL || defaultUserAvatar} alt={user.displayName || '사용자'} className="user-photo" onClick={() => setShowMenu(!showMenu)} />
                            {showMenu && (
                                <div className="dropdown-menu">
                                    <Link to="/" className="menu-item">
                                        마이 페이지(구현중)
                                    </Link>
                                    <button onClick={handleLogout} className="menu-item">
                                        로그아웃
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <a href="/Login">로그인</a>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
