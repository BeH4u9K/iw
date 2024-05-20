
import Client from './Front/Client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Movie from './Front/Movie';
import Admin from './Front/Admin';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Client />} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
