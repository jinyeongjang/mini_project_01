import './App.css';
import movieData from './public/movieListData.json';
import MovieCard from './components/MovieCard';

function App() {
    const movies = movieData.results;
    console.log(movieData);
    console.log(movies);

    return (
        <div className="container">
            <ul>
                {movies.map((movie) => (
                    // eslint-disable-next-line react/jsx-key
                    <MovieCard movie={movie} />
                ))}
            </ul>
        </div>
    );
}

export default App;
