import { SEARCH_RESULTS_RECEIVED, MOVIE_DETAILS_RECEIVED } from "../actions";

export function moviesReducer(state = {}, action) {
  switch (action.type) {
    case SEARCH_RESULTS_RECEIVED:
      return { ...state, ...action.apiResponse };
    case MOVIE_DETAILS_RECEIVED:
      return { ...state, ...action.apiResponse };
    default:
      return state;
  }
}
