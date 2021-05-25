import React from "react";
import "../App.css";
// import genericPhoto from "../images/movie.png";

export default function AllSearchedMovies(props) {
  return (
    <div className="all-movies">
      <div className="one-movie">
        <h2>{props.movie.Title}</h2>
        <h3>{props.movie.Year}</h3>
        <img src={props.movie.Poster} alt="movie poster" />
      </div>
    </div>
  );
}
