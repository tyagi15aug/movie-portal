import React from "react";
import { get } from "lodash";
import { Card, CardContent, Typography } from "@material-ui/core";

import "./MovieTile.css";

export const MovieTile = props => {
  const posterImage =
    get(props, "data.Poster") === "N/A"
      ? "http://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png"
      : get(props, "data.Poster");
  const imdbLink = `https://www.imdb.com/title/${get(props, "data.imdbID")}/`;
  return (
    <div>
      <Card className="movieTileWrapper">
        <CardContent className="movieTileContent">
          <img
            src={posterImage}
            alt={props.data.imdbID}
            className="moviePoster"
          />
          <div className="movieDetails">
            <Typography variant="h5" component="h2">
              {props.data.Title}
            </Typography>
            <Typography className="movieYear" color="textSecondary">
              {props.data.Year}
            </Typography>
            <a href={imdbLink} target="_blank" rel="noopener noreferrer">
              Goto imdb page
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
