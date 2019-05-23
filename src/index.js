import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { reducer as formReducer } from "redux-form";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { searchMovies, moviesReducer, rootSaga, movieDetailsReducer } from "./store";
import { composeWithDevTools } from "redux-devtools-extension";
import { SearchBar, SearchResults } from "./components";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  searchResults: moviesReducer,
  movieDetails: movieDetailsReducer,
  form: formReducer
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default class App extends React.Component {
  submit = values => {
    store.dispatch(searchMovies(values));
  };
  render() {
    return (
      <div className="appContainer">
        <SearchBar onSubmit={this.submit} />
        <SearchResults />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
