import React, { Component } from "react";
import { get } from "lodash";
import { connect } from "react-redux";
import { MovieTile } from "../MovieTile";
import { requestMovieDetails } from "../../store";

function mapStateToProps(state) {
  return {
    results: state.searchResults.Search
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showDetails: (imdbID) => dispatch(requestMovieDetails(imdbID))
  };
}

class SearchResultsComponent extends Component {
  showDetails = (imdbID) => {
    this.props.showDetails(imdbID)
  }

  render() {
    return (
      <div>
        {get(this.props, "results") ? (
          this.props.results.map(item => <MovieTile data={item} key={item.imdbID} onShowDetails={(event) => this.showDetails(item.imdbID)} />)
        ) : (
          <span />
        )}
      </div>
    );
  }
}

export const SearchResults = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultsComponent);
