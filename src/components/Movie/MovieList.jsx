
import React from "react";
import { useLocation } from 'react-router-dom';
import { Options, Ul, Title, Div } from "./Movie.styled";
import PropTypes from 'prop-types';
// import { URL_IMG } from "services/api";

const MovieList = ({ movies }) => {
  // const { backdrop_path, id, title } = movies || {}; 
const location = useLocation();
  const visibleMovies = movies.filter(movie => movie.id && movie.title && movie.backdrop_path);
  // const posterUrl = `${URL_IMG}w300${backdrop_path}`;
    return (
        <Div>
           <Ul>
             {visibleMovies.map(movie => (
              <li key={movie.id}>
                <Options to={`/movies/${movie.id}`} state={{ from: location }}>
                   <Title>{movie.title}</Title>
                   {/* {backdrop_path && (
        <img src={posterUrl} alt={title} />
      )} */}
                </Options>
              </li>
            ))}
          </Ul>
        </Div>
           )
}
MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
}
export default MovieList;    

