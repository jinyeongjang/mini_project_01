import '../App.css';
import '../components/MovieCard.css';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/movie/${movie.id}`);
    };

    // Display vote average with two decimal places
    const voteAverage = movie.vote_average.toFixed(2);

    // Add thousand separator to viewersCount
    const viewersCount = movie.popularity.toLocaleString();

    return (
        <li key={movie.id} onClick={handleClick} className="card-box">
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>
                ⭐️ 평점: {voteAverage}점 / 😀 관객 수: {viewersCount}명
            </p>
        </li>
    );
};

export default MovieCard;
