import { useEffect, useState } from 'react';
import axios from '../api/axios';
import MovieCard from './MovieCard';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    const fetchPopularMovies = async () => {
        try {
            const response = await axios.get('movie/popular');
            setMovies(response.data.results);
        } catch (error) {
            console.error('TMDB Api키를 찾을 수 없어요.', error);
        }
    };

    useEffect(() => {
        fetchPopularMovies();
    }, []);

    return (
        <main className="container">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </main>
    );
};

export default MovieList;
