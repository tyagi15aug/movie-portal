export const SEARCH_MOVIES = "SEARCH_MOVIES";
export const SEARCH_RESULTS_RECEIVED = "SEARCH_RESULTS_RECEIVED";
export const REQUEST_MOVIE_DETAILS = "REQUEST_MOVIE_DETAILS";
export const MOVIE_DETAILS_RECEIVED = "MOVIE_DETAILS_RECEIVED";

export function searchMovies(queryObject) {
  return { type: SEARCH_MOVIES, queryObject};
}

export function dataReceived(apiResponse) {
  return { type: SEARCH_RESULTS_RECEIVED, apiResponse};
}

export function requestMovieDetails(imdbID) {
  return { type: REQUEST_MOVIE_DETAILS, imdbID};
}

export function movieDetailsReceived(apiResponse) {
  return { type: MOVIE_DETAILS_RECEIVED, apiResponse};
}