import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'services/api';
import { Loader } from './Loader/Loader';
// import api from 'services/api';

export const Cast = () => {
  const { movieId } = useParams();
  const { movieCredit, setMovieCredit } = useState();
  // const { error, setError } = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const posterImgUrl = API.URL_IMG;

  
  useEffect(() => {
    const creditsMovieData = async (id) => {
      try {
        setIsLoading(true);
        const data = await API.fetchCreditsMovieData(id);
        const creditsForRender = data.filter(person => person.profile_path !== null);
        setMovieCredit(creditsForRender)
      } catch (error) {
        console.log(error.message);
      } 
    };
      creditsMovieData(movieId)
  }, [setMovieCredit, movieId])

  return (
    <section>
      {/* {error && <p>Something goes wrong</p>} */}
        {isLoading && <Loader />}
      {movieCredit && (
        <ul>
          {movieCredit.map(person => (
            <li key={person.id}>
              <img
                src={`${posterImgUrl}w185${person.profile_path}`}
                alt={person.character}
              />
              <p>{person.name}</p>
              <p>Character: {person.character}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  //   <>
        
  //     <div>Cast: {movieCredit.id}</div>
  //  </>
  ) 
};