import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Navbar from './components/Navbar';
import MovieBanner from './components/MovieBanner';
import FooterPage from './components/FooterPage';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import SearchPage from './components/SearchPage';
import SideMenu1 from './components/SideMenu1';
import MovieCategoryko from './components/MovieCategoryko';
import MovieCategoryAction from './components/MovieCategoryAction';
import MovieCategoryAnimation from './components/MovieCategoryAnimation';

function App() {
    return (
        <BrowserRouter>
            <DndProvider backend={HTML5Backend}>
                <Navbar />
                <div className="App">
                    <header></header>
                    <main>
                        <MovieBanner />
                        <SideMenu1 />
                        <Routes>
                            <Route path="/" element={<MovieList />} />
                            <Route path="/movie/:id" element={<MovieDetail />} />
                            <Route path="/signup" element={<SignupPage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/search" element={<SearchPage />} />
                            <Route path="/movie-category-ko" element={<MovieCategoryko />} />
                            <Route path="/movie-category-action" element={<MovieCategoryAction />} />
                            <Route path="/movie-category-animation" element={<MovieCategoryAnimation />} />
                        </Routes>
                    </main>
                    <footer>
                        <FooterPage />
                    </footer>
                </div>
            </DndProvider>
        </BrowserRouter>
    );
}

export default App;
