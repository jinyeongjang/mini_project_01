import './MovieCard.css';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/movie/${movie.id}`);
    };

    return (
        <li key={movie.id} onClick={handleClick} className="card-box">
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>평점: {movie.vote_average}</p>
        </li>
    );
};

export default MovieCard;
