import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import './MovieBanner.css';

const MovieBanner = () => {
    const [movie, setMovie] = useState({});
    const location = useLocation();

    useEffect(() => {
        fetchData();
        return () => {
            setMovie({});
        };
    }, [location]);

    const fetchData = async () => {
        try {
            const popularMoviesResponse = await axios.get('https://api.themoviedb.org/3/movie/popular', {
                params: { api_key: import.meta.env.VITE_TMDB_ACCESS_KEY, language: 'ko-KR' },
            });

            const randomMovieId = popularMoviesResponse.data.results[Math.floor(Math.random() * popularMoviesResponse.data.results.length)].id;

            const movieDetailResponse = await axios.get(`https://api.themoviedb.org/3/movie/${randomMovieId}`, {
                params: { api_key: import.meta.env.VITE_TMDB_ACCESS_KEY, language: 'ko-KR' },
            });

            setMovie(movieDetailResponse.data);
        } catch (error) {
            console.error('Failed to fetch movie data:', error);
        }
    };

    const voteAverage = movie.vote_average ? movie.vote_average.toFixed(2) : '';

    const viewersCount = movie.popularity ? movie.popularity.toLocaleString() : '';

    return (
        <Link to={movie.id ? `/movie/${movie.id}` : '/'} className="movie-banner-link">
            <div className="movie-banner" style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")` }}>
                <div className="movie-banner-overlay">
                    <div className="movie-banner-content">
                        <div className="movie-banner-title">
                            <h1>{movie.title}</h1>
                        </div>
                        <div className="movie-banner-overview">
                            <p>{movie.overview}</p>
                        </div>
                        <div className="movie-banner-info">
                            <p>
                                ⭐️ 평점: {voteAverage}점 / 😀 관객 수: {viewersCount}명
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default MovieBanner;
