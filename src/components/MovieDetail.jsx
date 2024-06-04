import './MovieDetail.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from '../api/axios.js'; // axios를 import하여 .env 파일 로드

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(`movie/${id}`);
                setMovie(response.data);
            } catch (error) {
                console.error('영화 세부 정보를 불러올 수 없어요.', error);
            }
        };
    
        fetchMovieDetails();
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="detail-container">
            <div className="img-box">
                <img className="detail__img" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className="detail__info">
                <div className="detail__head">
                    <h1>{movie.title}</h1>
                    <button className="detail__button">이전으로</button>
                </div>
                <p className="detail__genre">{movie.genres.map(genre => (
                    <span key={genre.id} className="genre-btn">{genre.name}</span>
                ))}</p>
                <p className="detail__overview">{movie.overview}</p>
                <p>개봉일: {movie.release_date}</p>
                <p>평점: {movie.vote_average}</p>
            </div>
        </div>
    );
};

export default MovieDetail;
