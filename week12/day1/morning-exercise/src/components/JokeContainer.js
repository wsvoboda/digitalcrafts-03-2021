import React, { useEffect, useState } from "react";
import Jokes from "./Jokes";

export default function JokeContainer() {
  const [dadJokes, setDadJokes] = useState([]);

  // will fire every time anything changes on page

  //   useEffect(() => {
  //     getDadJoke();
  //   });

  // useEffect only firing when the variable in the square brackets changes

  //   useEffect(() => {
  //     console.log("Use Effect Triggered");
  //   }, [dadJoke]);

  // will fire just one time

  useEffect(() => {
    getDadJokes();
  }, []);

  const getDadJokes = async () => {
    const fetchData = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const json = await fetchData.json();
    setDadJokes([...dadJokes, json.joke]);
    dadJokes.push(json.joke);
  };
  return (
    <div>
      <h1>Joke Container</h1>
      {dadJokes.map((joke) => (
        <Jokes dadJoke={joke} setDadJokes={setDadJokes} />
      ))}
      <button onClick={() => getDadJokes()}>New Joke</button>
      <button onClick={() => setDadJokes([])}>Clear Jokes</button>
    </div>
  );
}
