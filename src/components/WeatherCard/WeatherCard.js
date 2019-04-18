import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Card = styled.div`
  background-color: #fff;
  border-radius: 4px;
  margin: 24px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: #ece9e6;
  background: -webkit-linear-gradient(to right, #ffffff, #ece9e6);
  background: linear-gradient(to right, #ffffff, #ece9e6);
  color: rgba(0, 0, 0, 0.8);
`;

const CardTitle = styled.div`
  font-size: 24px;
  border-bottom: rgba(0, 0, 0, 0.1) solid 1px;
  padding: 8px;
`;

const CardGroup = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin: 0;
  @media (min-width: 1024px) {
    flex-direction: row;
    overflow-x: scroll;
    box-shadow: inset 0 0 16px rgba(0, 0, 0, 0.16);
  }
`;
const CardGroupTime = styled.li`
  align-items: center;
  display: flex;
  justify-content: space-between;
  @media (min-width: 1024px) {
    flex-direction: column;
    width: 90px;
    flex: 0 0 auto;
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
`;
const CardGroupItem = styled.div`
  flex: ${props => props.flex || "auto"};
  padding: 0;
  font-size: 12px;
  &:not(:last-child) {
    text-align: left;
    margin-right: 8px;
  }
  @media (min-width: 1024px) {
    &:not(:last-child) {
      margin-right: 0;
    }
  }
`;
const Icon = styled.img`
  width: 32px;
  height: 32px;
  @media (min-width: 1024px) {
    width: 48px;
    height: 48px;
  }
`;

const WeatherCard = ({ weekday, items }) => (
  <Card>
    <CardTitle>{weekday}</CardTitle>
    <CardGroup>
      {items.map((item, i) => (
        <CardGroupTime key={`group_${i}`}>
          <CardGroupItem flex={"none"}>
            <Icon alt={item.description} src={item.icon} />
          </CardGroupItem>
          <CardGroupItem flex={1}>
            <b>
              {Math.round(item.main.temp)}
              <span>&deg;C</span>
            </b>
          </CardGroupItem>
          <CardGroupItem flex={3}>{item.description}</CardGroupItem>
          <CardGroupItem flex={2}>{item.hour}</CardGroupItem>
        </CardGroupTime>
      ))}
    </CardGroup>
  </Card>
);

WeatherCard.propTypes = {
  weekday: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
};

export default WeatherCard;
