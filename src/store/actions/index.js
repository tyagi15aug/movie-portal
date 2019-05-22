export const SEARCH_MOVIES = "SEARCH_MOVIES";
export const SEARCH_RESULTS_RECEIVED = "SEARCH_RESULTS_RECEIVED";

export function searchMovies(queryObject) {
  return { type: SEARCH_MOVIES, queryObject};
}

export function dataReceived(apiResponse) {
  return { type: SEARCH_RESULTS_RECEIVED, apiResponse};
}