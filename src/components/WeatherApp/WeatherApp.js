import React from "react";
import styled from "styled-components";
// Components
import WeatherSearchCity from "../WeatherSearchCity";
import WeatherCard from "../WeatherCard";

// Hooks
import useOpenWeathermapApi from "hooks/useOpenWeather";

// Assets
import ERROR_IMG from "assets/error.png";
import LOGO_IMG from "assets/logo.png";

const WeatherAppContainer = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  display: flex;
  height: 100vh;
  overflow: hidden;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Sidebar = styled.div`
  flex: none;
  background-color: #673ab7;
  padding: 18px 18px 0;
  position: relative;
  z-index: 1;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  @media (min-width: 768px) {
    flex: 2;
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Content = styled.div`
  flex: 3;
  background-color: grey;
  overflow-y: scroll;
  scroll-behavior: smooth;
  background: lightgray;
  position: relative;
  z-index: 0;
  @media (min-width: 768px) {
    flex: 5;
  }
`;

const SidebarTitle = styled.h1`
  font-size: 1.2em;
  font-weight: lighter;
  margin: 0;
  line-height: normal;
  color: aquamarine;
  @media (min-width: 768px) {
    font-size: 2em;
  }
`;
const SidebarSubtitle = styled.h1`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.2);
`;

const ErrorMessage = styled.div`
  margin: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(0, 0, 0, 0.6);
`;

const ImgLogo = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const Loading = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  background-color: coral;
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
  padding: 8px;
  transition: transform 100ms ease-in-out;
  transform: ${props =>
    props.visible ? "translateY(0)" : "translateY(-32px)"};
`;

const WeatherApp = () => {
  const { isLoading, data, isError, fetchData } = useOpenWeathermapApi(
    "Vancouver"
  );

  return (
    <WeatherAppContainer>
      <Sidebar>
        <ImgLogo src={LOGO_IMG} width="100" height="100" alt="React Forecast" />
        <SidebarTitle>
          React <b>Forecast</b>
        </SidebarTitle>
        <SidebarSubtitle>https://openweathermap.org/forecast5</SidebarSubtitle>
        <WeatherSearchCity onChangeCity={fetchData} />
      </Sidebar>
      <Content>
        <Loading visible={isLoading}>Loading data...</Loading>
        {isError && (
          <ErrorMessage>
            <img src={ERROR_IMG} width="64" height="64" alt="Error" />
            <span>Sorry, we can't find data for this city</span>
          </ErrorMessage>
        )}
        {!isError &&
          data &&
          data.map(item => <WeatherCard key={item.weekday} {...item} />)}
      </Content>
    </WeatherAppContainer>
  );
};

export default WeatherApp;
