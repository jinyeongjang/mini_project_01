import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../api/axios.js';
import useDebounce from '../hooks/useDebounce.js'; // 디바운스 훅 import 추가
import './SearchPage.css';

const SearchPage = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const searchTerm = query.get('q');

    const [searchResults, setSearchResults] = useState([]);
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSearchMovie = async (searchTerm) => {
            try {
                const request = await axios.get(`/search/movie?include_adult=false&query=${searchTerm}`);
                setSearchResults(request.data.results);
            } catch (error) {
                console.log('영화 정보를 불러올 수 없어요.', error);
            }
        };

        if (debouncedSearchTerm) {
            fetchSearchMovie(debouncedSearchTerm);
        }
    }, [debouncedSearchTerm]);

    return (
        <div>
            {searchResults.length > 0 ? (
                <section className="search-container">
                    {searchResults.map((movie) => {
                        if (movie.backdrop_path !== null && movie.media_type !== 'person') {
                            const movieImageUrl = 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path;
                            return (
                                <div key={movie.id} className="card-box" onClick={() => navigate(`/movie/${movie.id}`)}>
                                    <img src={movieImageUrl} alt={movie.title} />
                                    <h3>{movie.title}</h3>
                                    <p>평점: {movie.vote_average}</p>
                                </div>
                            );
                        }
                        return null;
                    })}
                </section>
            ) : (
                <section className="no-results">
                    <div className="no-results__text">
                        <p>찾고자 하는 영화 "{searchTerm}"에 맞는 영화가 없어요.</p>
                    </div>
                </section>
            )}
        </div>
    );
};

export default SearchPage;
