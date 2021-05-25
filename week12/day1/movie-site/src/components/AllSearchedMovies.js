import React, { useState } from "react";
import "../App.css";
import genericPhoto from "../images/movie.png";

export default function AllSearchedMovies(props) {
  //   const [moviePoster, setMoviePoster] = useState("");
  //   if (props.movie.Poster === "N/A") {
  //     setMoviePoster({ genericPhoto });
  //   } else {
  //     setMoviePoster(props.movie.Poster);
  //   }
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
