import axios from "axios";
// const URLCredits = 'https://api.themoviedb.org/3/movie/{movie_id}/credits'
// PATH PARAMS: {movie_id: ''}
// const URLReviews = 'https://api.themoviedb.org/3/movie/{movie_id}/reviews'
// PATH PARAMS: {movie_id: ''}
const URL = 'https://api.themoviedb.org/3/';
// PATH PARAMS: {movie_id: ''}, QUERY PARAMS: {append_to_response: video, image, describe.....}
export const URL_IMG = 'https://image.tmdb.org/t/p/';
// const IMG_BASE_URL = 'https://image.tmdb.org/t/p/';
// const URLSearch = 'https://api.themoviedb.org/3/search/movie'
const KEY = 'aa3953ee8706f4bf1c70825a0873668c';

export const fetchSearchMovieData = async (searchQuery) => {
     const searchParams = new URLSearchParams({
         api_key: KEY,
         query: searchQuery
  });
     try {
        const response = axios.get(`${URL}search/movie?api_key=${searchParams}`);
         return response.data;
        
    } catch (error) {
        // Handle errors here
        console.error('Error fetching search movies:', error);
        throw error;
    }
    }
// async function fetchCreditsMovieData(id) {
//   const searchParams = new URLSearchParams({
//     api_key: KEY,
//   });

//   const response = await axios.get(
//     `${URL}movie/${id}/credits?${searchParams}`
//   );

//   if (response.data.cast) {
//     return response.data.cast;
//   }
//   return Promise.reject(
//     new Error(`
//   There are no info about cast for this movie`)
//   );
// }
// // ______________________________________
// export const fetchMovieDetails = async movieId => {
//     const res = await axios.get(`${URL}movie/${movieId}?api_key=${KEY}&language=en-US`);
//     console.log(res.data) ;
// }
export const fetchMovieDetails = async (movieId) => {
     const searchParams = new URLSearchParams({
         api_key: KEY,
         id: movieId,
  });
     try {
        const response = axios.get(`${URL}movie?api_key=${searchParams}`);
         return response.movieId;
        
    } catch (error) {
        // Handle errors here
        console.error('Error fetching search movies:', error);
        throw error;
    }
    }
// export const fetchMovieDetails = (movieId) => {
//     return axios.get(`${URL}movie/${movieId}?api_key=${KEY}&language=en-US`)
//         .then(resp => resp.data)
//         .catch(error => {
//             console.error('Error fetching credits movies:', error);
//             throw error;
//         });
// };
// export const fetchCreditsMovieData = async (id) => {
//     const resp = await axios.get(`${URL}movie/${id}/credits?api_key=${KEY}&language=en-US`);
//     console.log(resp) ;
// }
export const fetchCreditsMovieData = () => {
    return axios.get(`${URL}movie/credits?api_key=${KEY}&language=en-US`)
        .then(resp => resp.data)
        .catch(error => {
            console.error('Error fetching credits movies:', error);
            throw error;
        });
};

export const fetchTrendingMovieDay = () => {
    return axios.get(`${URL}trending/movie/day?api_key=${KEY}`)
        .then(response => response.data.results)
        .catch(error => {
            console.error('Error fetching trending movies:', error);
            throw error;
        });
};
// export const fetchTrendingMovieDay = async () => {
//     const {response} = await axios.get(`${URL}trending/all/day?api_key=${KEY}`);
//     return response.data.results;
// }
// export const fetchDetailsMovie = async movieId => {
//     const { data } = await axios.get(`${URL}/movie/${movieId}?api_key=${KEY}`);
//     return data;
// }
// const api = { fetchCreditsMovieData };
// export default api;