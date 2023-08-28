// import { URL_IMG } from "services/api";
import React from "react";
import { URL_IMG } from "services/api";


const CastList = ({ actors }) => {
  return (
    <ul>
      {actors.map((actor) => (
        <li key={actor.credit_id}>
          {actor.profile_path && (
            <img src={`${URL_IMG}w200${actor.profile_path}`} alt={actor.name} />
          )}

          <span>Original name :</span> {actor.original_name && <p>{actor.original_name}</p>}
          <span>Character :</span>{actor.character && <p>{actor.character}</p>}
        </li>
      ))}
    </ul>
  );
};

export default CastList;
