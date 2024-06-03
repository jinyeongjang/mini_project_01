import React from 'react';
import { useHistory } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        history.push('/detail');
    };

    const movieImageUrl = movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : '';

    return (
        <li key={movie.id} onClick={handleClick} className="card-box">
            {movieImageUrl && <img src={movieImageUrl} alt={movie.title} loading="lazy" />} {/* 이미지 URL이 존재할 때만 이미지를 렌더링 */}
            <h3>{movie.title}</h3>
            <p>⭐️ {movie.vote_average}</p>
        </li>
    );
};

export default MovieCard;
