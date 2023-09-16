import { useSearchParams } from 'react-router-dom';
import { useState, useEffect} from "react"; 
import * as API from 'services/api';
import Searchbar from '../components/Searchbar/MovieSearchForm';
import { Loader } from 'components/Loader/Loader';
import MovieList from 'components/Movie/MovieList';

// import {  toast } from 'react-toastify';

const Movies = () => {
  
  const [movieSearch, setMovieSearch] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const updateQueryString = query => {
    const nextParams = query.trim() !== '' ? { query } : {};
    setSearchParams(nextParams);
    if (query.trim() === '') {
      setMovieSearch([]);
    }
  };
 const searchMovieData = async (searchQuery) => {
    try {
      const response = await API.fetchSearchMovieData(searchQuery);
      setMovieSearch(response.results);
    } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
  };

  useEffect(() => {
    if(query === '') {
      return;
    }
    searchMovieData(query);
  }, [query]);


  return (
       <>
      <div>
        {isLoading && <Loader />}
          <Searchbar onSubmit={updateQueryString} />
           {error ? (<p>Error: {error.message}</p>
                ) : searchParams !== 0 ? movieSearch && (
                    <MovieList movies={movieSearch} />
                ) : (
                    <p>No movies found.</p> 
                )}
        </div>
     
      
  </>
  )
}

export default Movies;


