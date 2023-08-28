import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'services/api';
import { Loader } from '../Loader/Loader';
import CastList from './CastList';
// import api from 'services/api';

  const Cast = () => {
  const { movieId } = useParams();
  const [movieCredit, setMovieCredit] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
    

  useEffect(() => {
     API.fetchCreditsMovieData(movieId)
      .then(({ cast }) => {
        setMovieCredit(cast);
      })
      .catch(err => {
        console.log(err);
      })
       .finally(() => {
        setIsLoading(true)
      });   
  
}, [movieId]);

  return (
    <>
       {/* {isLoading &&
        <Loader />} */}
      <CastList actors={movieCredit} /> 
      {isLoading ? (
  <Loader />
) : (
  <ul>
    {movieCredit && movieCredit.length > 0 ? (
      movieCredit.map(actor => (
        <li key={actor.cast_id}>
          {actor.name} as {actor.character}
        </li>
      ))
    ) : (
      <p>No data about actors</p>
    )}
  </ul>
)}
  </>
   )
  
};
export default Cast;