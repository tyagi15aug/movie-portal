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
            <Typography variant="h5" component="h2">
              {props.data.Title}
            </Typography>
            <Typography className="movieYear" color="textSecondary">
              {props.data.Year}
            </Typography>
            <a href={imdbLink} target="_blank" rel="noopener noreferrer">
              Goto IMDb
            </a>
            <MovieDetails imdbID={props.data.imdbID} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
