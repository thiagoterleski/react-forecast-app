import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// Hooks
import useInput from "hooks/useInput";

const Form = styled.form`
  padding: 24px;
`;
const Input = styled.input`
  padding: 0 0 8px;
  border: 0;
  background-color: transparent;
  border-bottom: rgba(0, 0, 0, 0.2) 2px solid;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  font-size: 18px;
  width: 100%;
  outline: none;
  font-size: 22px;
`;

const Hint = styled.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.3);
`;

const WeatherSearchCity = ({ onChangeCity }) => {
  const { value, onChange } = useInput("Vancouver");
  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        onChangeCity(value);
      }}
    >
      <Input name="city" placeholder="Try another city" value={value} onChange={onChange} />
      <Hint>Check the weather in your city</Hint>
    </Form>
  );
};

WeatherSearchCity.propTypes = {
  onChangeCity: PropTypes.func.isRequired
};

export default WeatherSearchCity;
