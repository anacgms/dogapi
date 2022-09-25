import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  // useEffect(() => {
  //   axios.get('https://dog.ceo/api/breeds/image/random').then((response) => {
  //     setDogs(response.data.message)
  //   })
  // }, [])

  const [status, setStatus] = useState(false);
  const [dogs, setDogs] = useState();
  const RandomImage = () => {
    axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
      setDogs(response.data.message);
      setStatus(true);
    });
  };
  return (
    <div>
      <h1>Seja feliz!</h1>
      {status && <img src={dogs} alt="dog" />}
      <button
        onClick={() => {
          RandomImage();
        }}
      >
        Be Happy
      </button>
    </div>
  );
}
