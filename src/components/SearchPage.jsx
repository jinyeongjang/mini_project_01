import '../App.css';
import './SearchPage.css';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../api/axios.js';
import useDebounce from '../hooks/useDebounce.js'; // 디바운스 훅 import 추가

const SearchPage = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const searchTerm = query.get('q');

    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const debouncedSearchTerm = useDebounce(searchTerm, 500); // 500ms 디바운스

    useEffect(() => {
        const fetchSearchMovies = async () => {
            if (!debouncedSearchTerm) return; // 디바운스된 검색어가 없으면 종료

            try {
                const response = await axios.get(`/search/movie?include_adult=false&query=${debouncedSearchTerm}`);
                const movies = response.data.results;

                // 각 영화의 상세 정보를 가져오기
                const detailedMovies = await Promise.all(
                    movies.map(async (movie) => {
                        const detailResponse = await axios.get(`/movie/${movie.id}`);
                        return detailResponse.data;
                    })
                );

                setSearchResults(detailedMovies);
                setLoading(false);
            } catch (error) {
                console.error('영화 정보를 불러올 수 없어요.', error);
                setLoading(false);
            }
        };

        fetchSearchMovies();
    }, [debouncedSearchTerm]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {searchResults.length > 0 ? (
                        <section className="search-container">
                            {searchResults.map((movie) => (
                                <div key={movie.id} className="card-box" onClick={() => navigate(`/movie/${movie.id}`)}>
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
                                    <h3>{movie.title}</h3>
                                    <p>
                                        ⭐️ 평점: {movie.vote_average.toFixed(2)}점 / 😀 관객 수: {movie.popularity.toLocaleString()}명
                                    </p>
                                </div>
                            ))}
                        </section>
                    ) : (
                        <section className="no-results">
                            <div className="no-results__text">
                                <p>찾고자 하는 영화 "{debouncedSearchTerm}"에 맞는 영화가 없어요.</p>
                            </div>
                        </section>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchPage;
