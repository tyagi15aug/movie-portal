import axios from "axios";
import { get } from 'lodash';
import { all, call, put, takeLatest } from "redux-saga/effects";
import { SEARCH_MOVIES, dataReceived } from "../actions";

function fetchAPIData(queryData) {
  let query = get(queryData,'query', '');
  let type = get(queryData,'type', '');
  let year = get(queryData,'year', '');
  let page = get(queryData,'page', 1);
  let URL = `http://www.omdbapi.com/?apikey=50e2b0ce&s=${query}&y=${year}&type=${type}&page=${page}`
  return axios.request({
    method: 'get',
    url: URL
  });
}

function* searchMoviesEffectsSaga(action) {
  try {
    let { data } = yield call(fetchAPIData, action.queryObject);
    yield put(dataReceived(data));
  } catch (e) {
    console.log(e)
  }
}

function* searchMoviesWatcherSaga() {
  yield takeLatest(SEARCH_MOVIES, searchMoviesEffectsSaga);
}

export function* searchMoviesSaga() {
  yield all([
    searchMoviesEffectsSaga(),
    searchMoviesWatcherSaga()
  ])
}
