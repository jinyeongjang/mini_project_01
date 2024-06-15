import './SideMenu2.css';
import { useNavigate } from 'react-router-dom';

const SideMenu2 = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/movie-category-ko'); // 수정된 경로 '/movie-category-ko'로 변경
    };

    return (
        <div className="side-menu2">
            <div className="button-group1">
                <button className="button1" onClick={handleButtonClick}>
                    무서운
                </button>
            </div>

            <div className="button-group2">
                <button className="button2">음악</button>
            </div>

            <div className="button-group3">
                <button className="button3">미스테리</button>
            </div>

            <div className="button-group4">
                <button className="button4">로맨스</button>
            </div>
            <div className="button-group5">
                <button className="button5">공상 과학</button>
            </div>
            <div className="button-group6">
                <button className="button6">TV 시리즈</button>
            </div>
            <div className="button-group7">
                <button className="button7">스릴러</button>
            </div>
            <div className="button-group8">
                <button className="button8">전쟁</button>
            </div>
            <div className="button-group9">
                <button className="button9">서양</button>
            </div>
        </div>
    );
};

export default SideMenu2;
