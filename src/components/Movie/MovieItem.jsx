import { Link, useLocation } from "react-router-dom";
export const MovieItem = ({title,name, movieId}) => {
 const location = useLocation();
  return (
      <li >
            <Link  to={`movies/${movieId}`} state={{ from: location }}>
              {title?? name}
            </Link>  
            </li>
)    
}

