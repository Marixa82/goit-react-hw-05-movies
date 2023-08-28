import {  useSearchParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import * as API from 'services/api';
import Searchbar from '../components/Searchbar/MovieSearchForm';
import { MovieList } from 'components/Movie/MovieList';

// import {  toast } from 'react-toastify';

const Movies = () => {
  
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const updateQueryString = query => {
    const nextParams = query.trim() !== '' ? { query } : {};
    setSearchParams(nextParams);
    if (query.trim() === '') {
      setMovies([]);
    }
  };

const searchMovieData = async (searchQuery) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await API.fetchSearchMovieData(searchQuery);
      setMovies(response.results);
    } catch (error) {
      console.log(error)
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    searchMovieData(query);
  }, [query]);

  return (
    <>
      <Searchbar onSubmit={updateQueryString} />
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : query.length === 0 ? (
            <p>{ ""}</p>
      ) :  movies !== 0 ? (
        <MovieList movies={movies} /> 
      ) : ("No movies found.")}
    </>
  );
};

 

export default Movies;

 // return (
  //   <>
  //     <h2>Movie</h2>
  //     <div>
  //       <input type="text" value={movieId} onChange={updateQueryString} />
  //       <button>Search</button>
        
       
  //     </div>
  //   </>
  // );
// };