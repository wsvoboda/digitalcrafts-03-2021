import React, { useEffect, useState } from "react";
import "./App.css";
import FirstMovie from "./components/FirstMovie";
import Search from "./components/Search";
import APIKey from "./components/API";

function App() {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieSummary, setMovieSummary] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieImage, setMovieImage] = useState("");

  const [searchCriteria, setSearchCriteria] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getFirstMovie();
  }, []);

  const getFirstMovie = async () => {
    const fetchData = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=${APIKey}`
    );
    const json = await fetchData.json();
    setMovieTitle(json.Title);
    setMovieSummary(json.Plot);
    setMovieRating(json.Rated);
    setMovieImage(json.Poster);
  };

  const searchMovies = async (searchCriteria) => {
    const fetchData = await fetch(
      `http://www.omdbapi.com/?s=${searchCriteria}&apikey=${APIKey}`
    );
    const json = await fetchData.json();
    setSearchResults(json.Search);
    console.log(json);
  };

  return (
    <div className="App">
      <FirstMovie
        movieTitle={movieTitle}
        movieSummary={movieSummary}
        movieRating={movieRating}
        movieImage={movieImage}
      />
      <Search />
    </div>
  );
}

export default App;
