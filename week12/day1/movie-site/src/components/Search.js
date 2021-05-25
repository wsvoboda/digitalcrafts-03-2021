import React from "react";
import "../App.css";

export default function Search(props) {
  return (
    <div className="search">
      <h1>Search</h1>
      <input
        type="text"
        placeholder="Search for a Movie"
        onChange={(e) => {
          props.setSearchCriteria(e.target.value);
        }}
        value={props.searchCriteria}
        required
      ></input>
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
