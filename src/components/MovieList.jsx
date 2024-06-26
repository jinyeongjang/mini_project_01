import { useEffect, useState, useRef, useCallback } from 'react';
import axios from '../api/axios';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableMovieCard from './DraggableMovieCard';
import '../App.css';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const observer = useRef();

    const fetchPopularMovies = async (page) => {
        setLoading(true);
        try {
            const response = await axios.get('movie/popular', { params: { page } });
            setMovies((prevMovies) => [...prevMovies, ...response.data.results]);
            setHasMore(response.data.results.length > 0);
            setLoading(false);
        } catch (error) {
            console.error('TMDB Api키를 찾을 수 없어요.', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPopularMovies(page);
    }, [page]);

    const lastMovieElementRef = useCallback(
        (node) => {
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore && !loading) {
                    setPage((prevPage) => prevPage + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [loading, hasMore]
    );

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
                {loading && <p>Loading...</p>}
            </main>
        </DndProvider>
    );
};

export default MovieList;
