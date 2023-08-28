import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'services/api';
import { Loader } from 'components/Loader/Loader';
import ReviewsList from './ReviewsList';

    const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const movieReviewsData = async () => {
      try {
        const results = await API.fetchReviewMovieData(movieId);
        setMovieReviews(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    movieReviewsData(movieId);
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error.message}</p>}

      <ReviewsList reviews={movieReviews} />

      
    </>
  );
};

export default Reviews;


