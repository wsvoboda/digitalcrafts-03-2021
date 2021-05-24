import React from "react";

export default function AllSearchedMovies(props) {
  return (
    <div>
      <h3>{props.movie.Title}</h3>
      <h4>{props.movie.Year}</h4>
      <img src={props.movie.Poster} alt="movie poster" />
    </div>
  );
}
