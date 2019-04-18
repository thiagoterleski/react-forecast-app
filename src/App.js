import React from "react";
import { createGlobalStyle } from "styled-components";
import WeatherApp from "./components/WeatherApp";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-overflow-scrolling: touch;
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
