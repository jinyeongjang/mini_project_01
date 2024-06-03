import './App.css';
import movieData from './public/movieDetailData.json';
import MovieCard from './components/MovieCard';

function App() {
    const movies = movieData.results;

    return (
        <div className="container">
            {movies.map((movie) => {
                return (
                    <ul>
                        <MovieCard movie={movie} />
                    </ul>
                );
            })}
        </div>
    );
}

export default App;
