import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import { Link } from 'react-router-dom';
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/details/:id" element={<MovieDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
