import React from "react";
import { URL_IMG } from "services/api";
import PropTypes from 'prop-types';
import { Ul, Img, Div, Card, DefaultImg, Span } from "./Cast.styled";


const CastList = ({ actors }) => {
  return (
    <Ul>
      {actors.map((actor) => (
        <Card key={actor.credit_id}>
          <picture>
            {actor.profile_path && actor.profile_path !== '' ? (
              <Img src={`${URL_IMG}w200${actor.profile_path}`} alt={actor.name} />
            ) : (
              <DefaultImg />
            )}
          </picture>
<Div>
  
            <Span>Original name :</Span> {actor.original_name && actor.original_name !== '' ? (<p>{actor.original_name}</p>) : ('')}
            {actor.character && actor.character !== '' && (
    <>
      <Span>Character:</Span>
        <p>{actor.character}</p>
      
    </>
  )}
           
</Div>
        </Card>
      ))}
    </Ul>
  );
};


CastList.propTypes = {
  actors: PropTypes.array.isRequired,
};

export default CastList;