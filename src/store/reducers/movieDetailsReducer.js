import { MOVIE_DETAILS_RECEIVED } from "../actions";

export function movieDetailsReducer(state = {}, action) {
  switch (action.type) {
    case MOVIE_DETAILS_RECEIVED:
      return { ...state, ...action.apiResponse };
    default:
      return state;
  }
}
