import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MovieBanner from './components/MovieBanner';
import FooterPage from './components/FooterPage';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import SearchPage from './components/SearchPage';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header>
                    <Navbar />
                </header>
                <main>
                    <MovieBanner />
                    <Routes>
                        <Route path="/" element={<MovieList />} />
                        <Route path="/movie/:id" element={<MovieDetail />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/search" element={<SearchPage />} />
                    </Routes>
                </main>
                <footer>
                    <FooterPage />
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
