import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import axios from '../api/axios';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                // axios 가져오기 - movie/popular 카테고리 가져오기.
                const response = await axios.get('movie/popular');
                setMovies(response.data.results);
                console.log(response.data.results);
            } catch (error) {
                console.error('TMdb Api키를 찾을 수 없어요.', error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className="container">
            <ul>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
