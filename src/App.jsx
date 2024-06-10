import { Outlet } from 'react-router-dom';
import NavBar from './components/Navbar';
import MovieBanner from './components/MovieBanner';
import FooterPage from './components/FooterPage';

function App() {
    return (
        <div className="App">
            <header>
                <NavBar />
            </header>
            <main>
                <MovieBanner />
                <Outlet />
                <FooterPage />
            </main>
        </div>
    );
}

export default App;
