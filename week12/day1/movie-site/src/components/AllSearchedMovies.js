import React from "react";
import "../App.css";
import genericPhoto from "../images/movie.png";

export default function AllSearchedMovies(props) {
  return (
    <div className="all-movies">
      <div className="one-movie">
        <h3>{props.movie.Title}</h3>
        <h5>{props.movie.Year}</h5>
        <img src={props.movie.Poster} alt="movie poster" />
      </div>
    </div>
  );
}
