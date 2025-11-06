import React, { useEffect, useState } from "react";
import axios from "axios";
import TextToAudio from "./components/TextToAudio";

function App() {
  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/home`);
      console.log(response);
    } catch (err) {
      console.log(" is =>>>", err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Text to Audio Converter</h1>
      <TextToAudio />
    </div>
  );
}

export default App;
