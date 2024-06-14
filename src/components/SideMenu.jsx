import './SideMenu.css';
import { useNavigate } from 'react-router-dom';

const SideMenu = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/movie-category-ko'); // 수정된 경로 '/movie-category-ko'로 변경
    };

    return (
        <div className="side-menu">
            <div className="button-group1">
                <button className="button1" onClick={handleButtonClick}>
                    대한민국
                </button>
            </div>

            <div className="button-group2">
                <button className="button2">액션</button>
            </div>

            <div className="button-group3">
                <button className="button3">애니메이션</button>
            </div>

            <div className="button-group4">
                <button className="button4">드라마</button>
            </div>
        </div>
    );
};

export default SideMenu;
