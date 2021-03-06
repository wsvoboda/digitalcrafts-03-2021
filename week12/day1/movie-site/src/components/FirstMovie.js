import React from "react";

export default function FirstMovie(props) {
  return (
    <div className="featured-movie">
      <h1>This Month's Featured Movie</h1>
      <div className="first-movie">
        <h2>{props.movieTitle}</h2>
        <h6>{props.movieRating}</h6>
        <img src={props.movieImage} alt="movie poster" />
        <h4>{props.movieSummary}</h4>
      </div>
    </div>
  );
}
