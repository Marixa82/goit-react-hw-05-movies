import {  Outlet,  useParams } from 'react-router-dom';
import React from 'react';

import {  Suspense, useState, useEffect} from "react"; 
import * as API from 'services/api';
import MovieDetailsList from 'components/MovieDetailsList/MovieDetailsList';
import MovieInfo from 'components/Movie/MovieInfo';

const MovieDetails = () => {
  // const posterImgUrl = 'https://image.tmdb.org/t/p/w500';
  
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  
  
  const movieDetailsId = async (id) => {
       try {
         const movieDetailsData = await API.fetchMovieDetails(id)
         setMovieData(movieDetailsData);
       } catch (error) {
         console.log(error);
       } 
     };
   useEffect(() => {
      
     
       movieDetailsId(movieId);
       
  }, [movieId])

  return (
    <>
      
      {movieData && (
        <>
        {/* {error && <p>Something goes wrong</p>} 
       {isLoading && <Loader />} */}
        <MovieDetailsList movies={movieData} /> 
        <MovieInfo/>
      </>
      )}
      
        
      <Suspense fallback={<div>LOADING ...</div>}>
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