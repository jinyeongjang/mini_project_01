import '../App.css';
import './MovieDetail.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from '../api/axios.js';

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [videoKey, setVideoKey] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
                    params: {
                        api_key: import.meta.env.VITE_TMDB_ACCESS_KEY,
                        language: 'ko-KR',
                        append_to_response: 'videos',
                    },
                });
                setMovie(response.data);
                if (response.data.videos && response.data.videos.results.length > 0) {
                    setVideoKey(response.data.videos.results[0].key);
                }
            } catch (error) {
                console.error('영화 세부 정보를 불러올 수 없어요.', error);
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    const handlePlayVideo = () => {
        if (videoKey) {
            window.open(`https://www.youtube.com/watch?v=${videoKey}`, '_blank');
        }
    };

    // Display vote average with two decimal places
    const voteAverage = movie.vote_average.toFixed(2);

    // Add thousand separator to viewersCount
    const viewersCount = movie.popularity.toLocaleString();

    return (
        <div className="detail-container">
            <div className="img-box">
                <img className="detail__img" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className="detail__info">
                <div className="detail__head">
                    <h1>{movie.title}</h1>
                    <button className="detail__button" onClick={() => navigate(-1)}>
                        이전으로
                    </button>
                </div>
                <p className="detail__genre">
                    {movie.genres.map((genre) => (
                        <span key={genre.id} className="genre-btn">
                            {genre.name}
                        </span>
                    ))}
                </p>
                <p className="detail__overview">{movie.overview}</p>
                <p>🗓️ 개봉일: {movie.release_date}</p>
                <p>
                    ⭐️ 평점: {voteAverage}점 / 😀 관객 수: {viewersCount}명
                </p>

                {videoKey && (
                    <div className="detail__video">
                        <button className="play-btn" onClick={handlePlayVideo}>
                            영상 재생
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MovieDetail;
