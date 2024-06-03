import './MovieDetail.css';
import movieDetailData from '../public/movieDetailData.json';
import { useNavigate } from 'react-router-dom';

const MovieDetail = () => {
    const detail = movieDetailData;
    const navigate = useNavigate();

    const handleGoHome = (e) => {
        navigate('/');
    };

    return (
        <div className="detail-container">
            <div className="img-box">
                <img className="detail__img" src={`https://image.tmdb.org/t/p/original${detail.poster_path}`} alt={detail.title} />
            </div>
            <div className="detail__info">
                <div className="detail__head">
                    <h2>{detail.title}</h2>
                    <p>⭐️ {detail.vote_average}</p>
                </div>
                <div className="detail__genre">
                    {detail.genres.map((genre) => (
                        <span key={genre.id}>{genre.name} </span>
                    ))}
                </div>
                <div className="detail__overview">
                    <h3>Overview</h3>
                    <p>{detail.overview}</p>
                </div>
                <div className="detail__buttons">
                    <button className="detail__button" onClick={handleGoHome}>
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
