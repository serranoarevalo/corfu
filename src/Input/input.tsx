import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { InputProps } from "../types";

const Container = styled<any>("div")`
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  font-family: "Nunito Sans", sans-serif;
`;

const Label = styled.label`
  font-weight: 700;
  font-size: 14px;
  margin-left: 12px;
  margin-bottom: 11px;
`;

const SInput = styled<any>("input")`
  border: none;
  background-color: ${props => (props.isMaterial ? "transparent" : "white")};
  box-shadow: ${props =>
    props.isMaterial ? "none" : "0px 2px 4px 0px rgba(0, 0, 0, 0.1)"};
  border-radius: 3px;
  padding: 15px 12px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 14px;
  color: #333333;
  transition: all 0.2s ease-in-out;
  &::placeholder {
    color: #999999;
  }
  &:focus,
  &:active {
    outline: none;
  }
  &:focus {
    box-shadow: ${props =>
      props.isMaterial ? "none" : "0px 5px 8px 0px rgba(0, 0, 0, 0.1)"};
  }
`;

export const Input = ({
  value,
  label,
  placeholder,
  multiline = false,
  isMaterial = false,
  name,
  id,
  width = "500px"
}: InputProps) => (
  <Container width={width}>
    {label ? <Label htmlFor={id}>{label}</Label> : null}
    <SInput
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      as={multiline ? "textarea" : "input"}
      isMaterial={isMaterial}
    />
  </Container>
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  multiline: PropTypes.bool
};
