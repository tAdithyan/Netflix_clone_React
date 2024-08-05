import  { useEffect, useState } from 'react';
import './RowPost.css';
import { IMG_URL, API_KEY } from '../../constants/constants';
import YouTube from 'react-youtube';
import axios from '../../axios';

interface Movie {
  id(id: any): void;
  backdrop_path?: string;
}

interface RowPostProps {
  title?: string;
  isSmall?: boolean;
  url?: string;
}

function RowPost({ title, isSmall, url }: RowPostProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [movieId, setMovieId] = useState('');
  const [showtrailer, setshowTrailer] = useState(false);
  useEffect(() => {
    axios
      .get(`${url}`)
      .then(res => {
        if (res.data.results && res.data.results.length > 0) {
          setMovies(res.data.results);
        }
      })
      .catch(error => {
        console.error('Failed to fetch movie data:', error);
      });
  }, []);
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };
  const handleMovie = (id: any) => {
    setshowTrailer(true);
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
      .then(res => {
        let responce = res.data.results[0].key;
        console.log('data', res.data);

        {
          responce ? setMovieId(responce) : setshowTrailer(false);
        }
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      {movies.length === 0 ? (
        <p>No movies found</p>
      ) : (
        <div className="posters">
          {movies.map((obj, index) => (
            <img
              key={index}
              className={isSmall ? 'smallPoster' : 'poster'}
              alt="poster"
              src={
                obj.backdrop_path
                  ? `${IMG_URL + obj.backdrop_path}`
                  : 'path/to/placeholder/image.jpg'
              }
              onClick={() => handleMovie(obj.id)}
            />
          ))}
        </div>
      )}
      {showtrailer && <YouTube videoId={movieId} opts={opts} />}
    </div>
  );
}

export default RowPost;
