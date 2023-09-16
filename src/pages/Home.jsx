import {Main, Title} from "./Pages.styled";
import { useState, useEffect } from "react";
import * as API from 'services/api';
import MovieList from "components/Movie/MovieList";
import { Loader } from "components/Loader/Loader";

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
    
    const trendingMovieDay = async () => {
      try {
        setIsLoading(true);
        const trendingMovies = await API.fetchTrendingMovieDay();
        setMovies(trendingMovies);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
      trendingMovieDay();
  }, [])

    return (
      <Main>
        <div>
          {isLoading && <Loader />}
          <Title>Tranding Today</Title>
           {error ? (<p>Error: {error.message}</p>
                ) : movies !== 0 ? (
                    <MovieList movies={movies} />
                ) : (
                    <p>No movies found.</p> 
                )}
        </div>
          </Main>
    )
}
export default HomePage;