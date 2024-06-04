import './MovieDetail.css';
import movieDetailData from '../public/movieDetailData.json';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MovieDetail = () => {
    const [detail, setDetail] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // 비동기 데이터 로드 시뮬레이션
        const fetchData = async () => {
            // 데이터를 로드 및 상태에 설정하기.
            setDetail(movieDetailData);
        };

        fetchData();
    }, []);

    const handleGoHome = (e) => {
        navigate('/');
    };

    if (!detail) {
        return <div>불러오는 중...</div>;
    }

    return (
        <div className="detail-container">
            <div className="img-box">
                <img className="detail__img" src={`https://image.tmdb.org/t/p/original${detail.poster_path}`} alt={detail.title} />
            </div>
            <div className="detail__info">
                <div className="detail__head">
                    <h2>{detail.title}</h2>
                    <p>평점: {detail.vote_average}</p>
                </div>
                <div className="detail__genre">
                    {detail.genres.map((genre) => (
                        <span key={genre.id}>{genre.name} </span>
                    ))}
                </div>
                <div className="detail__overview">
                    <h3>줄거리</h3>
                    <p>{detail.overview}</p>
                </div>
                <div className="detail__buttons">
                    <button className="detail__button" onClick={handleGoHome}>
                        이전으로
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
