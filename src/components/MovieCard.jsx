import '../App.css';
import '../components/MovieCard.css';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/movie/${movie.id}`);
    };

    // 평점을 소수점 둘째자리까지 표시
    const calculateVoteAverage = () => {
        return movie.vote_average.toFixed(2);
    };

    // 관객 수에 천 단위 구분 기호 추가
    const addThousandSeparator = (count) => {
        return count.toLocaleString();
    };

    // 타이틀을 두 줄로 나누기 위한 JSX
    const renderTitle = () => {
        if (movie.title.length > 20) {
            const firstLine = movie.title.slice(0, 30);
            const secondLine = movie.title.slice(100);
            return (
                <div className="title">
                    <div>{firstLine}</div>
                    <div>{secondLine}</div>
                </div>
            );
        }
        return <div className="title">{movie.title}</div>;
    };

    return (
        <div onClick={handleClick} className="card-box">
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
            {renderTitle()}
            <p>
                ⭐️ 평점: {calculateVoteAverage()}점 / 😀 관객 수: {addThousandSeparator(movie.popularity)}명
            </p>
        </div>
    );
};

export default MovieCard;
