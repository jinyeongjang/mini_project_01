import { useEffect, useState } from 'react';
import axios from '../api/axios';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableMovieCard from './DraggableMovieCard';
import '../App.css';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    const fetchPopularMovies = async () => {
        try {
            const responses = await Promise.all([axios.get('movie/popular', { params: { page: 1 } }), axios.get('movie/popular', { params: { page: 2 } })]);
            const moviesPage1 = responses[0].data.results;
            const moviesPage2 = responses[1].data.results;
            const allMovies = [...moviesPage1, ...moviesPage2];
            setMovies(allMovies);
        } catch (error) {
            console.error('TMDB Api키를 찾을 수 없어요.', error);
        }
    };

    useEffect(() => {
        fetchPopularMovies();
    }, []);

    const moveCard = (dragIndex, hoverIndex) => {
        const dragMovie = movies[dragIndex];
        const updatedMovies = [...movies];
        updatedMovies.splice(dragIndex, 1);
        updatedMovies.splice(hoverIndex, 0, dragMovie);
        setMovies(updatedMovies);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <main className="container">
                {movies.map((movie, index) => (
                    <DraggableMovieCard key={movie.id} index={index} movie={movie} moveCard={moveCard} />
                ))}
            </main>
        </DndProvider>
    );
};

export default MovieList;
