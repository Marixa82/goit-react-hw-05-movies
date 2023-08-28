import { URL_IMG } from "services/api";
import React from "react";


const MovieDetailsList = ({ movies}) => {
    const { overview, poster_path, original_title, vote_average, genres } = movies || {};
        return (
          <>
      {poster_path && (
      <img src={`${URL_IMG}w500${poster_path}`} alt={original_title} />
    )}
    {original_title && (
      <p>{original_title}</p>
    )}
    {vote_average && (
      <p>User score: {Math.round(Number(vote_average) * 10)} %</p>
    )}
    {overview && (
      <p>{overview}</p>
    )}
    {genres && genres.length > 0 && (
      <ul>Genres: {genres.map((genre) => genre.name).join(', ')}</ul>
    )}
        </>
    )
};
export default MovieDetailsList;