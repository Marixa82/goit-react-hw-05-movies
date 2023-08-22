// import { useState } from "react";
// import { URL_IMG } from "services/api";

import { useParams } from "react-router-dom";

const DetailList = ({ posterImgUrl }) => {
    const { movieId } = useParams;
    // const { overview, poster_path, original_title, vote_average, genres } = movies;
    // const defaultImg = 'https://images.app.goo.gl/8wQwgukfmUNAFbUi8';
    const posterUrl = `${posterImgUrl}w500${movieId.poster_path}`;
    return (
        <>
            
            <img src={posterUrl} alt={movieId.title} />
            <p>{movieId.title}</p>
            <p>User score: {Math.round(Number(movieId.vote_average) * 10)} % </p>
            <p>{movieId.overview}</p>
            <ul>Genres:
                {movieId.genres.map(genre => genre.name).join(' ')}
            </ul>
        </>
    )
};
export default DetailList;