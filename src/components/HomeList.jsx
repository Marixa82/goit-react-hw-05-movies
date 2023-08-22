import { HomeItem } from "./HomeItem";
// import {  useLocation } from 'react-router-dom';
export const MovieList = ({ movies }) => {

    const visibleMovies = movies.filter(movie => movie.id && movie.title);
    return (
        
        <ul>
            {visibleMovies.map(movie => (
                
                <HomeItem key={movie.id} title={movie.title} />
            ))}
        </ul>
           )
}
        

