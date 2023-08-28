import axios from "axios";
export const URL = 'https://api.themoviedb.org/3/';
export const URL_IMG = 'https://image.tmdb.org/t/p/';

export const API_KEY = '0c24bd03222b39ae028a9061bc80e8a5';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTIzMmM2NWVkOGEyYzk3YzJjZDZkN2Y2NjJhNThhNiIsInN1YiI6IjY0ZGNjNzQ2NTllOGE5MDBhYzA3ZjkyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VEfQXLXm8dTFjmSR93bdP0x3SCZbTJRytNBaFFU8fLo'
  }
};
export const fetchSearchMovieData = async (searchQuery) => {
       try {
        const response = axios.get(`${URL}search/movie?query=${searchQuery}` , options);
        return  ((await response).data);
      } catch (error) {
        console.error('Error fetching search movies:', error);
        throw error;
    }
}
    

export const fetchMovieDetails = async movieId => {
  try {
    const resp = await axios.get(`${URL}movie/${movieId}` , options)
    return resp.data;
  } catch (error) {
    console.error('Error fetching  movies:', error);
    throw error
  };
};
export const fetchReviewMovieData = async (movieId) => {
  try {
    const response = await axios.get(`${URL}movie/${movieId}/reviews?language=en-US&page=1`, options);

    return response.data.results;
  } catch (error) {
    console.error('Error fetching reviews movies:', error);
    throw error;
  }
};
  
  
// export const fetchReviewMovieData = (movieId) => {
//     return axios.get(`${URL}movie/${movieId}/reviews?language=en-US` , options)
//         .then(resp => resp.data)
//         .catch(error => {
//             console.error('Error fetching reviews movies:', error);
//             throw error;
//         });
// };
export const fetchCreditsMovieData = (movieId) => {
    return axios.get(`${URL}movie/${movieId}/credits?language=en-US`, options)
        .then(resp => resp.data)
        .catch(error => {
            console.error('Error fetching credits movies:', error);
            throw error;
        });
};

export const fetchTrendingMovieDay = () => {
    return axios.get(`${URL}trending/movie/day`, options)
        .then(response => response.data.results)
        .catch(error => {
            console.error('Error fetching trending movies:', error);
            throw error;
        });
};

