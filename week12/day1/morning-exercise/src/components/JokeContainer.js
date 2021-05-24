import React, { useEffect, useState } from "react";
import Jokes from "./Jokes";

export default function JokeContainer() {
  const [dadJoke, setDadJoke] = useState("");

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
    getDadJoke();
  }, []);

  const getDadJoke = async () => {
    const jokeURL = "https://icanhazdadjoke.com/";
    const fetchData = await fetch(jokeURL, {
      headers: {
        Accept: "application/json",
      },
    });
    const json = await fetchData.json();
    setDadJoke(json.joke);
  };
  return (
    <div>
      <h1>Joke Container</h1>
      <Jokes dadJoke={dadJoke} />
    </div>
  );
}
