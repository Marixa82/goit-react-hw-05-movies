import { Link, useLocation } from "react-router-dom";
export const HomeItem = ({title,name, id}) => {
 const location = useLocation();
  return (
      <li >
            <Link  to={`movies/${id}`} state={{ from: location }}>
              {title?? name}
            </Link>  
            </li>
)    
}

