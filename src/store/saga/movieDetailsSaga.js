import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { movieDetailsReceived, REQUEST_MOVIE_DETAILS } from "../actions";

function fetchAPIData(imdbID) {
  let URL = `http://www.omdbapi.com/?apikey=50e2b0ce&i=${imdbID}&plot=full`
  return axios.request({
    method: 'get',
    url: URL
  });
}

function* requestMovieDetailsEffectsSaga(action) {
  try {
    let { data } = yield call(fetchAPIData, action.imdbID);
    yield put(movieDetailsReceived(data));
  } catch (e) {
    console.log(e)
  }
}

function* requestMovieDetailsWatcherSaga() {
  yield takeLatest(REQUEST_MOVIE_DETAILS, requestMovieDetailsEffectsSaga);
}

export function* movieDetailsSaga() {
  yield all([
    requestMovieDetailsWatcherSaga(),
    requestMovieDetailsEffectsSaga()
  ])
}
