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
  /**
   * Class Name
   */
  className?: string;
}

const Container = styled.div`
  font-family: "Nunito Sans", sans-serif;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  height: 20px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-left: 10px;
  cursor: pointer;
`;

const Svg = styled<any>("div")`
  position: absolute;
  display: block;
  top: 5%;
  left: 6px;
  svg {
    fill: ${props => (props.checked ? "#2d4ef5" : "#CCCCCC")};
  }
`;

const Input = styled.input`
  all: unset;
  border: none;
  background: none;
  width: 20px;
  height: 20px;
  display: block;
  border-radius: 50%;
  border: 3px solid #dfdfdf;
  transition: all 0.2s ease-in-out;
  &:checked {
    border: 3px solid #2d4ef5;
  }
  &:hover {
    border-color: ${props =>
      props.disabled && !props.checked ? "#E5E5E5" : "#2d4ef5"};
  }
  background-color: ${props =>
    props.disabled && !props.checked ? "#E5E5E5" : "none"};
  border-color: ${props =>
    props.disabled && !props.checked ? "#E5E5E5" : "#dfdfdf"};
`;

export const Radio = ({
  label,
  id,
  name,
  checked,
  disabled = false,
  className
}: IProps) => (
  <Container className={className}>
    <Input
      type="checkbox"
      id={id}
      name={name}
      checked={checked}
      disabled={disabled}
    />
    {checked || disabled ? (
      <Svg checked={checked}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="12" />
        </svg>
      </Svg>
    ) : null}
    {label ? <Label htmlFor={id}>{label}</Label> : null}
  </Container>
);

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string
};
