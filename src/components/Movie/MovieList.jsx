import { MovieItem } from "./MovieItem";
// import {  useLocation } from 'react-router-dom';
export const MovieList = ({ movies }) => {

    const visibleMovies = movies.filter(movie => movie.id && movie.title);
    return (
        
        <ul>
            {visibleMovies.map(movie => (
            <MovieItem key={movie.id} title={movie.title} 
            movieId={movie.id}
            poster={movie['poster_path']}
            type={movie['media_type']}
            rating={movie['vote_average']}
            date={movie['release_date']}/>
            ))}
        </ul>
           )
}
        

