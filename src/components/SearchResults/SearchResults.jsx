import React, { Component } from 'react';
import { get } from 'lodash';
import { connect } from 'react-redux';
import { MovieTile } from '../MovieTile';

function mapStateToProps(state) {
  return {
    results: state.searchResults.Search
  };
}

class SearchResultsComponent extends Component {
  render() {
    return (
      <div>
        {get(this.props, 'results') ? this.props.results.map((item) => <MovieTile data={item} />) : <span></span>}
      </div>
    );
  }
}

export const SearchResults = connect(
  mapStateToProps,
  null
)(SearchResultsComponent);