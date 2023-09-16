import React from "react";
import { Loader } from "components/Loader/Loader";
import { URL_IMG } from "services/api";
import PropTypes from 'prop-types'; 
import { Ul, Span, Li } from "./Review.styled";

const ReviewsList = ({ reviews }) => {
  if (!reviews) {
    return <Loader />;
  }

    const filteredReviews = reviews.filter(
    ({ author_details }) => author_details && author_details.rating !== null && author_details.rating !== 0
  );

  return (
    <>
      {filteredReviews.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <Ul>
          {filteredReviews.map(({ id, author, author_details, content, url }) => (
            <Li key={id}>
              <Span>Author:</Span> <p>{author}</p>
              <p>
                {author_details && author_details.avatar_path ? (
                  <img
                    src={`${URL_IMG}w200${author_details.avatar_path}`}
                    alt={author_details.name}
                  />
                ) : (
                  ""
                )}
              </p>
              <Span>Content:</Span> <p>{content.length > 100 ? content.slice(0, 500) + '...' : content}</p>
              <Span>Rating:</Span> <p>{author_details && author_details.rating ? author_details.rating : ""}</p>
              <a href={url} target="_blank" rel="noopener noreferrer">
                more details
              </a>
            </Li>
          ))}
        </Ul>
      )}
    </>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};
export default ReviewsList;









 //    if (!reviews) {
  //   return <p>No reviews available</p>;
  // }
/* <ul>
          {results.map((result) => (
            <li key={result.id}>
              <span>Author:{result.author && <p>{result.author}</p>}</span> 
              <span>Author details:{result.author_details && <p>{result.author_details}</p>}</span> 
              <span>Content:{result.content && <p>{result.content}</p>}</span> 
              <span>Url:{result.url && <p>{result.url}</p>}</span> 
            </li>
          ))}
        </ul> */






