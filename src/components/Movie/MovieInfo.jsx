
 import { Ul, Options, Li} from "./Movie.styled";
 const MovieInfo = () => {
 
  return (
      <Ul>
        <Li>
          <Options to="cast">Actors</Options>
          </Li>
        <Li>
          <Options to="reviews">About</Options>
        </Li>
      </Ul>
      
)    
}
export default MovieInfo;
