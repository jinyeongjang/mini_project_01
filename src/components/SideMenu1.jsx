import './SideMenu1.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SideMenu1 = () => {
    const navigate = useNavigate();
    const [activeGenre, setActiveGenre] = useState('');

    const handleToggleClick = (genre, path) => {
        setActiveGenre(genre);
        navigate(path);
    };

    return (
        <div className="side-menu1">
            <div className="button-group1">
                <button className={`button button1 ${activeGenre === '액션' ? 'active' : ''}`} onClick={() => handleToggleClick('액션', '/movie-category-action')}>
                    액션
                </button>
            </div>
            <div className="button-group2">
                <button className={`button button2 ${activeGenre === '어드벤쳐' ? 'active' : ''}`} onClick={() => handleToggleClick('어드벤쳐', '/movie-category-adventure')}>
                    어드벤쳐
                </button>
            </div>
            <div className="button-group3">
                <button className={`button button3 ${activeGenre === '애니메이션' ? 'active' : ''}`} onClick={() => handleToggleClick('애니메이션', '/movie-category-animation')}>
                    애니메이션
                </button>
            </div>
            <div className="button-group4">
                <button className={`button button4 ${activeGenre === '코미디' ? 'active' : ''}`} onClick={() => handleToggleClick('코미디', '/movie-category-comedy')}>
                    코미디
                </button>
            </div>
            {/* <div className="button-group5">
                <button className={`button button5 ${activeGenre === '범죄' ? 'active' : ''}`} onClick={() => handleToggleClick('범죄', '/movie-category-crime')}>
                    범죄
                </button>
            </div>
            <div className="button-group6">
                <button className={`button button6 ${activeGenre === '다큐멘터리' ? 'active' : ''}`} onClick={() => handleToggleClick('다큐멘터리', '/movie-category-documentary')}>
                    다큐멘터리
                </button>
            </div>
            <div className="button-group7">
                <button className={`button button7 ${activeGenre === '드라마' ? 'active' : ''}`} onClick={() => handleToggleClick('드라마', '/movie-category-drama')}>
                    드라마
                </button>
            </div>
            <div className="button-group8">
                <button className={`button button8 ${activeGenre === '가족' ? 'active' : ''}`} onClick={() => handleToggleClick('가족', '/movie-category-family')}>
                    가족
                </button>
            </div>
            <div className="button-group9">
                <button className={`button button9 ${activeGenre === '판타지' ? 'active' : ''}`} onClick={() => handleToggleClick('판타지', '/movie-category-fantasy')}>
                    판타지
                </button>
            </div>
            <div className="button-group10">
                <button className={`button button10 ${activeGenre === '역사' ? 'active' : ''}`} onClick={() => handleToggleClick('역사', '/movie-category-history')}>
                    역사
                </button>
            </div>
            <div className="button-group11">
                <button className={`button button11 ${activeGenre === '무서운' ? 'active' : ''}`} onClick={() => handleToggleClick('무서운', '/movie-category-horror')}>
                    무서운
                </button>
            </div>
            <div className="button-group12">
                <button className={`button button12 ${activeGenre === '음악' ? 'active' : ''}`} onClick={() => handleToggleClick('음악', '/movie-category-music')}>
                    음악
                </button>
            </div>
            <div className="button-group13">
                <button className={`button button13 ${activeGenre === '미스테리' ? 'active' : ''}`} onClick={() => handleToggleClick('미스테리', '/movie-category-mystery')}>
                    미스테리
                </button>
            </div>
            <div className="button-group14">
                <button className={`button button14 ${activeGenre === '로맨스' ? 'active' : ''}`} onClick={() => handleToggleClick('로맨스', '/movie-category-romance')}>
                    로맨스
                </button>
            </div>
            <div className="button-group15">
                <button className={`button button15 ${activeGenre === '공상과학' ? 'active' : ''}`} onClick={() => handleToggleClick('공상과학', '/movie-category-scifi')}>
                    공상과학
                </button>
            </div>
            <div className="button-group16">
                <button className={`button button16 ${activeGenre === 'TV시리즈' ? 'active' : ''}`} onClick={() => handleToggleClick('TV시리즈', '/movie-category-tvseries')}>
                    TV시리즈
                </button>
            </div>
            <div className="button-group17">
                <button className={`button button17 ${activeGenre === '스릴러' ? 'active' : ''}`} onClick={() => handleToggleClick('스릴러', '/movie-category-thriller')}>
                    스릴러
                </button>
            </div>
            <div className="button-group18">
                <button className={`button button18 ${activeGenre === '전쟁' ? 'active' : ''}`} onClick={() => handleToggleClick('전쟁', '/movie-category-war')}>
                    전쟁
                </button>
            </div>
            <div className="button-group19">
                <button className={`button button19 ${activeGenre === '서부' ? 'active' : ''}`} onClick={() => handleToggleClick('서부', '/movie-category-western')}>
                    서부
                </button>
            </div> */}
        </div>
    );
};

export default SideMenu1;
