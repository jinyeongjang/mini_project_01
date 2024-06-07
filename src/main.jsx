import App from './App.jsx';
import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetail from './components/MovieDetail.jsx';
import MovieList from './components/MovieList.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import SearchPage from './components/SearchPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<MovieList />} />
                <Route path="movie/:id" element={<MovieDetail />} />
                <Route path="Signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
                <Route path="search" element={<SearchPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default App;
