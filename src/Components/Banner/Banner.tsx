import React, { useEffect, useState } from 'react';
import './Banner.css';
import { API_KEY } from '../../constants/constants';
import axios from '../../axios';

interface Movie {
  title: string;
  overview: string;
  backdrop_path: string;
}

const Banner: React.FC = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  

  useEffect(() => {
    axios
      .get(`/trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then(res => {
        if (res.data.results && res.data.results.length > 0) {
          const randomIndex = Math.floor(Math.random() * res.data.results.length);

          setMovie(res.data.results[randomIndex]);

        }
      })
      .catch(error => {
        console.error('Failed to fetch movie data:', error);
      });
  }, []);

  const backdropUrl = movie ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : '';

  return (
    <div className="banner" style={{ backgroundImage: `url(${backdropUrl})` }}>
      <div className="content">
        {movie ? (
          <>
            <h1 className="title">{movie.title}</h1>
            <div className="banner_buttons">
              <button className="button">Play</button>
              <button className="button">My List</button>
            </div>
            <h3 className="description">{movie.overview}</h3>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
};

export default Banner;
