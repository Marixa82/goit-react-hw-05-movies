import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import React from 'react';
// import Cast from 'components/Cast/Cast';
import { Loader } from 'components/Loader/Loader';
import { useRef, Suspense, useState, useEffect} from "react"; 
import * as API from 'services/api';
import MovieDetailsList from 'components/MovieDetailsList/MovieDetailsList';

const MovieDetails = () => {
  const posterImgUrl = 'https://image.tmdb.org/t/p/w500';
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  
   useEffect(() => {
      
     const movieDetails = async () => {
       try {
         const movieDetailsData = await API.fetchMovieDetails(movieId)
         setMovieData(movieDetailsData);
       } catch (error) {
         setError(error);
       } finally {
         setIsLoading(false);
       }
     };
       movieDetails(movieId);
       
  }, [movieId])

  return (
    <>
      <Link to={backLinkLocationRef.current}>Назад к странице коллекции</Link>
      <h1>Movie Details:
        {movieData?.title
        || 'Title not available'}</h1>
      
      <>
        {error && <p>Something goes wrong</p>} 
       {isLoading && <Loader />}
        <MovieDetailsList movies={movieData} posterImgUrl={posterImgUrl}/> 
        
      </>  
      <ul>
        <li>
          <Link to="cast">Actors</Link>
          {/* <Cast/> */}
        </li>
        <li>
          <Link to="reviews">About</Link>
        </li>
      </ul>
      <Suspense fallback={<div>LOADING SUBPAGE...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;


 /* <div>
        <img
    src={movieData?.backdrop_path && posterImgUrl + movieData.backdrop_path}
    alt={movieData?.title}
/>

            {movieData?.original_title}
              {movieData?.vote_average && (Math.round(movieData['vote_average'] * 10) / 10)}  
              {movieData?.overview}
              
                 {movieData?.genres && (
  <div>
    {movieData['genres'].map(genre => genre.name).join(' ')}
  </div>
)}
            </div> */