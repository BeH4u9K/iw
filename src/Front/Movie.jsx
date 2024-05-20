import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movie = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/movie');
                setMovies(response.data.movies);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="App_movie">
            <div className='movie'>
                <h1>Movies</h1>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {movies.map((movie, index) => (
                        <li key={index}>{movie}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Movie;
