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

    return (
        <div onClick={handleClick} className="card-box">
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>
                ⭐️ 평점: {calculateVoteAverage()}점 / 😀 관객 수: {addThousandSeparator(movie.popularity)}명
            </p>
        </div>
    );
};

export default MovieCard;
