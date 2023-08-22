import {  useSearchParams } from 'react-router-dom';
import { useState, useEffect } from "react";
// import { HomeItem } from 'components/HomeItem';
import { MovieList } from 'components/HomeList';
import * as API from 'services/api';
import Searchbar from 'components/MovieSearchForm';
// import {  toast } from 'react-toastify';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);
  // const { movieId } = useParams;
  const updateQueryString = query => {
    const nextParams = query.trim() !== '' ? { query } : {};
    setSearchParams(nextParams);
    if (query.trim() === '') {
      setMovies([]);
    }
  };

const searchMovieData = async (searchQuery) => {
      try {
        const response = await API.fetchSearchMovieData(searchQuery);
        setMovies(response)
      }
      catch (error) {
        console.log(error);
      }
    }

  useEffect(() => {
    
    searchMovieData(query);
        
    }, [query]);
  
  // const updateQueryString = evt => {
  //   const query = evt.target.value;
  //   if (query === '') {
  //     return setSearchParams({});
  //   }
  //   setSearchParams({ movieId: query });
  // };


return (
    <>
      <Searchbar onSubmit={updateQueryString} />
      {movies > 0 && <MovieList movies={movies} />}
    </>
  );
};

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

export default Movies;

