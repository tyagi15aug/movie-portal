import React, { Component } from "react";
import { isEmpty } from "lodash";
import { connect } from "react-redux";
import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import { requestMovieDetails } from "../../store";

import "./MovieDetails.css";
function mapStateToProps(state, ownProps) {
  return {
    movieDetails: state.movieDetails,
    imdbID: ownProps.imdbID
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showDetails: imdbID => dispatch(requestMovieDetails(imdbID))
  };
}

class MovieDetailsComponent extends Component {
  state = {
    open: false,
    scroll: "paper"
  };

  handleClickOpen = scroll => () => {
    this.props.showDetails(this.props.imdbID);
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  renderLoadingDialog = () => {
    return (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        scroll={this.state.scroll}
        aria-labelledby="scroll-dialog-title"
      >
        <DialogContent>Loading...</DialogContent>
      </Dialog>
    );
  };

  renderRating = item => {
    let renderItem;
    switch (item.Source) {
      case "Internet Movie Database":
        renderItem = (
          <div className="movieRatingWrapper">
            <img
              alt="Internet Movie Database"
              className="movieRatingIcon"
              src="http://aux.iconspalace.com/uploads/imdb-icon-256-322875901.png"
            />
            &nbsp;
            <div>{item.Value}</div>
          </div>
        );
        break;
      case "Rotten Tomatoes":
        renderItem = (
          <div className="movieRatingWrapper">
            <img
              alt="Rotten Tomatoes"
              className="movieRatingIcon"
              src="http://chittagongit.com/images/rotten-tomatoes-icon/rotten-tomatoes-icon-21.jpg"
            />
            &nbsp;
            <div>{item.Value}</div>
          </div>
        );
        break;
      case "Metacritic":
        renderItem = (
          <div className="movieRatingWrapper">
            <img
              alt="Metacritic"
              className="movieRatingIcon"
              src="https://pbs.twimg.com/profile_images/527528131171590144/EQXs3lpX.png"
            />
            &nbsp;
            <div>{item.Value}</div>
          </div>
        );
        break;
      default:
        renderItem = <div className="movieRatingWrapper" />;
        break;
    }
    return renderItem;
  };

  renderDetailsDialog = movieDetails => {
    return (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        scroll={this.state.scroll}
        aria-labelledby="scroll-dialog-title"
      >
        <DialogTitle id="scroll-dialog-title">
          {movieDetails.Title}
          <span className="movieYear">{movieDetails.Year}</span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className="movieRatingsWrapper movieDetailsSection">
              <span className="movieSectionHeading">Rating:</span>
              {movieDetails.Ratings &&
                movieDetails.Ratings.map(item => this.renderRating(item))}
            </div>
            <div className="movieSection">
              <span className="movieSectionHeading">Genre:</span>
              {movieDetails.Genre &&
                movieDetails.Genre.split(",").map(item => (
                  <Chip
                    label={item}
                    variant="outlined"
                    className="movieGenre"
                  />
                ))}
            </div>
            <div className="movieSection">
              <span className="movieSectionHeading">Director:</span>&nbsp;
              {movieDetails.Director}
            </div>
            <div className="movieSection">
              <span className="movieSectionHeading">Plot:</span>&nbsp;
              {movieDetails.Plot}
            </div>
            <div className="movieSection">
              <span className="movieSectionHeading">Cast:</span>&nbsp;
              {movieDetails.Actors}
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  render() {
    const { movieDetails } = this.props;

    return (
      <React.Fragment>
        <Button
          className="movieDetailsButton"
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen()}
        >
          Show Details
        </Button>
        {isEmpty(movieDetails)
          ? this.renderLoadingDialog()
          : this.renderDetailsDialog(movieDetails)}
      </React.Fragment>
    );
  }
}

export const MovieDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetailsComponent);
