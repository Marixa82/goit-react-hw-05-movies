// import { Link, useLocation } from 'react-router-dom';
// export const MoviesList = ({ movies}) => {
//     const location = useLocation();
//     const visibleMovies = movies.filter(movie => movie.id && movie.title);
//   return (
//     <div>
      
//       <ul>
//         {visibleMovies.map(movie => (
//           <li key={movie.id}>
//             <Link to={`movies/${movie.id}`} state={{ from: location }}>
//               <h2>{movie.title}</h2>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };