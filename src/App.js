import React from "react";
import { createGlobalStyle } from "styled-components";
import WeatherApp from "./components/WeatherApp";

const GlobalStyle = createGlobalStyle`
  body {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('./assets/clear.jpg');
    font-family: 'Roboto', sans-serif;
    background-attachment: fixed;
    background-color: #efefef;
    transition: background 1s linear;
  }
`;

const App = props => {
  return (
    <>
      <GlobalStyle />
      <WeatherApp />
    </>
  );
};

export default App;
