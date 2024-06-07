import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';


function App() {
    return (
        <div className="App">
        <header>
            <NavBar />
        </header>
            
            <Outlet />
            <main>
      </main>
    </div>
  );
}


export default App;
