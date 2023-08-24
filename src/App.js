import React, { useEffect, useState } from "react";
import "./App.css";
import laugh_emoji from "./laughing.png";

const App = () => {
  const [setup, setSetup] = useState()
  const [delivery, setDelivery] = useState()

  const getJoke = async () => {
    await fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart')
      .then((data) => data.json())
      .then((item) => {
        if (item.type === 'twopart') {

          // console.log(item);
          // console.log(item.setup);
          // console.log(item.delivery);

          setSetup(item.setup);
          setDelivery(item.delivery);
        }
      });
  }
  useEffect(() => {
    getJoke()
  }, [])
  return (
    <div className="App">
      <div className="card">
        <img
          src={laugh_emoji}
          alt="laughing emoji"
        />
        <div className="jokeContainer">
          <p>{setup}</p>
          <p>{delivery}</p>
        </div>
        <button onClick={getJoke}>Get Random Joke</button>
      </div>
    </div>
  );
};

export default App;
