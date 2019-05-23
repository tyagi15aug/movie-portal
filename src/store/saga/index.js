import { all, fork } from 'redux-saga/effects';
import { searchMoviesSaga } from './searchMoviesSaga';
import { movieDetailsSaga } from './movieDetailsSaga';

export function* rootSaga() {
    yield all([
        fork(searchMoviesSaga),
        fork(movieDetailsSaga),
    ]);
}