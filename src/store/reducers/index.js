import { SEARCH_RESULTS_RECEIVED } from "../actions";

export function moviesReducer(state = {}, action) {
  switch (action.type) {
    case SEARCH_RESULTS_RECEIVED: ; return {...state, ...action.apiResponse}
    default:
      return state;
  }
}
