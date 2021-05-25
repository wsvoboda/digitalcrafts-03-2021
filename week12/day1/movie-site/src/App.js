import React, { useEffect, useState } from "react";
import "./App.css";
import FirstMovie from "./components/FirstMovie";
import Search from "./components/Search";
import APIKey from "./components/API";
import AllSearchedMovies from "./components/AllSearchedMovies";

function App() {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieSummary, setMovieSummary] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieImage, setMovieImage] = useState("");

  const [searchCriteria, setSearchCriteria] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchPosters, setSearchPosters] = useState([]);

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
    if (searchCriteria !== "") {
      const fetchData = await fetch(
        `http://www.omdbapi.com/?s=${searchCriteria}&type=movie&apikey=${APIKey}`
      );
      const json = await fetchData.json();
      const allData = json.Search;
      allData.map((oneMovie) =>
        setSearchPosters(...searchPosters, oneMovie.Poster)
      );
      if (json.Search !== undefined) {
        setSearchResults(allData);
      } else {
        alert("No movies found with that title!");
      }
    } else {
      alert("Enter a Movie Title!");
    }
    setSearchCriteria("");
  };

  return (
    <div className="App">
      <FirstMovie
        movieTitle={movieTitle}
        movieSummary={movieSummary}
        movieRating={movieRating}
        movieImage={movieImage}
      />
      <Search
        searchCriteria={searchCriteria}
        setSearchCriteria={setSearchCriteria}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        searchMovies={searchMovies}
      />
      <div className="all-searched-movies">
        {searchResults.map((movie) => (
          <AllSearchedMovies movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
