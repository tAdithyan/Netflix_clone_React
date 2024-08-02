import React, { useEffect, useState } from 'react';
import './RowPost.css';
import { API_KEY, IMG_URL } from '../../constants/constants';
import axios from '../../axios';

interface Movie {
  backdrop_path: string;
}

function RowPost() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    axios
      .get(`/discover/tv?api_key=${API_KEY}&with_networks=213`)
      .then(res => {
        if (res.data.results && res.data.results.length > 0) {
          setMovies(res.data.results);
          console.log(res.data.results); 
        }
      })
      .catch(error => {
        console.error('Failed to fetch movie data:', error);
      });
  }, []);

  return (
    <div className="row">
      <h2>Title</h2>
      <div className="posters">
        {movies.map((obj, index) => (
          <img
            key={index}
            className="poster"
            alt="poster"
            src={`${IMG_URL + obj.backdrop_path}`}
          />
        ))}
      </div>
    </div>
  );
}

export default RowPost;
