import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import React from 'react';

import { useRef, Suspense, useState, useEffect } from "react"; 
// import { Loader } from 'components/Loader/Loader';
import * as API from 'services/api';
// import { URL_IMG } from 'services/api';
import DetailList from 'components/MovieDetailsList';

const MovieDetails = () => {
  const posterImgUrl = API.URL_IMG;
   const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const detailsMovieData = async (id) => {
      try {
        // setIsLoading(true);
        const detailsMovie = await API.fetchMovieDetails(id);
        setMovieData(detailsMovie)
      } catch (error) {
      console.log(error.message);
    }
    };
   useEffect(() => {
    // if (!movieId) return;
    
     detailsMovieData(movieId);
  }, [movieId])

  return (
    <>
      {movieData && (
      <>
        <DetailList movie={movieData} posterImgUrl={posterImgUrl} />
        <Link to={backLinkLocationRef.current}>Назад к странице коллекции</Link>
      </>  
      )}
      
      {/* {error && <p>Something goes wrong</p>} */}
      {/* {isLoading && <Loader />} */}
      
      <h1>Movie Details: {movieData?.title
 || 'Title not available'}</h1>
      <ul>
        <li>
          <Link to="cast">Actors</Link>
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