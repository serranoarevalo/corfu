import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

interface IProps {
  /**
   * Label of the checkbox
   */
  label: string;
  /**
   * ID of the Checkbox
   */
  id: string;
  /**
   * Name of the checkbox
   */
  name: string;
  /**
   * Is the checbox checked or not.
   */
  checked: boolean;
  /**
   * Is the checkbox disabled.
   * @default false
   */
  disabled?: boolean;
}

const Container = styled.div`
  font-family: "Nunito Sans", sans-serif;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

const Label = styled.label`
  font-size: 14px;
  margin-left: 10px;
  cursor: pointer;
`;

const Svg = styled<any>("div")`
  position: absolute;
  display: block;
  top: 4px;
  left: 6px;
  color: white;
  .check {
    fill: white;
  }
  .minus {
    fill: #cccccc;
  }
`;

const Input = styled.input`
  all: unset;
  border: none;
  background: none;
  width: 20px;
  height: 20px;
  display: block;
  border-radius: 3px;
  border: 3px solid #dfdfdf;
  transition: all 0.2s ease-in-out;
  &:checked {
    border: 3px solid #2d4ef5;
    background-color: #2d4ef5;
  }
  &:hover {
    border-color: ${props => (props.disabled ? "#E5E5E5" : "#2d4ef5")};
  }
  background-color: ${props => (props.disabled ? "#E5E5E5" : "none")};
  border-color: ${props => (props.disabled ? "#E5E5E5" : "#dfdfdf")};
`;

export const Checkbox = ({
  label,
  id,
  name,
  checked,
  disabled = false
}: IProps) => (
  <Container>
    <Input
      type="checkbox"
      id={id}
      name={name}
      checked={checked}
      disabled={disabled}
    />
    <Svg checked={checked}>
      {checked && !disabled ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          className="check"
        >
          <path d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z" />
        </svg>
      ) : null}
      {disabled && !checked ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          className="minus"
        >
          <path d="M0 10h24v4h-24z" />
        </svg>
      ) : null}
    </Svg>
    {label ? <Label htmlFor={id}>{label}</Label> : null}
  </Container>
);

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool
};
