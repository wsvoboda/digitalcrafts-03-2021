import React from "react";
import "../App.css";

export default function Search(props) {
  return (
    <div className="search">
      <h1>Search for More Movies</h1>
      <input
        type="text"
        placeholder="Enter Movie Title"
        onChange={(e) => {
          props.setSearchCriteria(e.target.value);
        }}
        value={props.searchCriteria}
        required
      ></input>
      <br></br>
      <button
        onClick={() => {
          props.searchMovies(props.searchCriteria);
        }}
      >
        Search
      </button>
      <h5>{props.searchOutput}</h5>
    </div>
  );
}
