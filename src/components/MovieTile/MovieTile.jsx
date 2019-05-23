import React from "react";
import { get } from "lodash";
import { Card, CardContent, Typography } from "@material-ui/core";

import "./MovieTile.css";
import { MovieDetails } from "../MovieDetails";

export const MovieTile = props => {
  const posterImage =
    get(props, "data.Poster") === "N/A"
      ? "./assets/posterPlaceholder.png"
      : get(props, "data.Poster");
  const imdbLink = `https://www.imdb.com/title/${get(props, "data.imdbID")}/`;
  return (
    <div>
      <Card className="movieTileWrapper">
        <CardContent className="movieTileContent">
          <div className="moviePosterWrapper">
            <img
              src={posterImage}
              alt={props.data.imdbID}
              className="moviePoster"
            />
          </div>
          <div className="movieDetails">
            <div className="movieDetailsSection">
              <Typography variant="h5" component="h2">
                {props.data.Title}
              </Typography>
              <Typography className="movieYear" color="textSecondary">
                {props.data.Year}
              </Typography>
            </div>
            <div className="movieDetailsSection">
              <MovieDetails imdbID={props.data.imdbID} />
            </div>
            <div className="movieDetailsSection imdbLinkWrapper">
              <a href={imdbLink} target="_blank" rel="noopener noreferrer" className="imdbLink">
                <img src="https://findicons.com/files/icons/2458/blawb/128/imdb_128x128_32.png" alt="Goto IMDb Page" className="imdbLinkImage" />
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
