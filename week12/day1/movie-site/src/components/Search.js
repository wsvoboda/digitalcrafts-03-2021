import React from "react";

export default function Search(props) {
  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        placeholder="Search for a Movie"
        onChange={(e) => {
          props.setSearchCriteria(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          props.searchMovies();
        }}
      >
        Search
      </button>
    </div>
  );
}
