import { URL_IMG } from "services/api";
import { useRef } from "react";
import { useLocation} from "react-router-dom";
import { Logo,Div, Section, Img, Poster } from "./MovieDetails.styled";



const MovieDetailsList = ({ movies}) => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const posterUrl = `${URL_IMG}w342${movies.poster_path}`;
    const { overview, poster_path, original_title, vote_average, genres } = movies || {};
        return (
          <Section>
            <Logo to={backLinkLocationRef.current}>{`<<Go back<<`}</Logo>
      <Div>
        <Poster>
          {poster_path && (
          <Img src={posterUrl} alt={original_title} />
        )}
        </Poster>
      <div>
        {original_title && (
          <h3>{original_title}</h3>
        )}
        {vote_average && (
          <p>User score: {Math.round(Number(vote_average) * 10)} %</p>
        )}
        {overview && (
          <p>{overview}</p>
        )}
        {genres && genres.length > 0 && (
          <p>Genres: {genres.map((genre) => genre.name).join(', ')}</p>
        )}
      </div>
      </Div>
        </Section>
    )
};
export default MovieDetailsList;