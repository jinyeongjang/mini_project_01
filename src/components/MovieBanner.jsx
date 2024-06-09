import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import './MovieBanner.css';

const MovieBanner = () => {
    const [movie, setMovie] = useState({});
    const [videoKey, setVideoKey] = useState('');
    const videoRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        fetchData();

        return () => {
            setMovie({});
            setVideoKey('');
        };
    }, [location]);

    const fetchData = async () => {
        try {
            const request = await axios.get('https://api.themoviedb.org/3/movie/popular', {
                params: {
                    api_key: import.meta.env.VITE_TMDB_ACCESS_KEY,
                    language: 'ko-KR',
                },
            });

            const movieId = request.data.results[Math.floor(Math.random() * request.data.results.length)].id;

            const { data: movieDetail } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
                params: {
                    api_key: import.meta.env.VITE_TMDB_ACCESS_KEY,
                    append_to_response: 'videos',
                    language: 'ko-KR',
                },
            });
            setMovie(movieDetail);
            if (movieDetail.videos && movieDetail.videos.results.length > 0) {
                setVideoKey(movieDetail.videos.results[0].key);
            }
        } catch (error) {
            console.error('Failed to fetch movie data:', error);
        }
    };

    // Display vote average with two decimal places
    const voteAverage = movie.vote_average ? movie.vote_average.toFixed(2) : '';

    // Add thousand separator to viewersCount
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
