const axios = require("axios").default;
import {
      TMDB_BASE_URL,
      TMDB_API_KEY,
      TMDB_IMAGE_BASE_URL,
      ENDPOINTS,
} from "../constants/Url";


const TMDB_HTTP_REQUEST = axios.create({
      baseURL: TMDB_BASE_URL,
      params: {
            api_key: TMDB_API_KEY,
      },

});

const getNowPlayingMovies = () => TMDB_HTTP_REQUEST.get(ENDPOINTS.NOW_PLAYING_MOVIES);

const getPopularMovies = () =>
  TMDB_HTTP_REQUEST.get(ENDPOINTS.POPULAR_MOVIES);

const getAllGenres = () => TMDB_HTTP_REQUEST.get(ENDPOINTS.GENRES);


const getPoster = (path) => `${TMDB_IMAGE_BASE_URL}/original${path}`;


export {
      getNowPlayingMovies,
      getPoster,
      getPopularMovies,
      getAllGenres
};
