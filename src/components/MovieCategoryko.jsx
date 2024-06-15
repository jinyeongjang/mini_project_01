import { useEffect, useState, useRef, useCallback } from 'react';
import axios from '../api/axios';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableMovieCard from './DraggableMovieCard';
import '../App.css';

const MovieCategoryko = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const observer = useRef();

    const fetchAdventureMovies = async (page) => {
        try {
            const response = await axios.get('discover/movie', {
                params: {
                    with_genres: 12, // Genre ID for Adventure
                    with_original_language: 'ko', // Korean language
                    sort_by: 'popularity.desc',
                    page,
                },
            });
            setMovies((prevMovies) => [...prevMovies, ...response.data.results]);
        } catch (error) {
            console.error('TMDB API 키를 찾을 수 없어요.', error);
        }
    };

    useEffect(() => {
        fetchAdventureMovies(page);
    }, [page]);

    const lastMovieElementRef = useCallback((node) => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setPage((prevPage) => prevPage + 1);
            }
        });
        if (node) observer.current.observe(node);
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
                    <DraggableMovieCard key={movie.id} index={index} movie={movie} moveCard={moveCard} ref={index === movies.length - 1 ? lastMovieElementRef : null} />
                ))}
            </main>
        </DndProvider>
    );
};

export default MovieCategoryko;
