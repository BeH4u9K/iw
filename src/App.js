
import Client from './Front/Client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './Front/Login';
import Movie from './Front/Movie';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Client />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
