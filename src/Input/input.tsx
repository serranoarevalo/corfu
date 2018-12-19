import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

interface IProps {
  /**
   * Value of the input
   */
  value: string;
  /**
   * Label that's displayed on top of the input
   */
  label?: string;
  /**
   * Placeholder of the input
   */
  placeholder?: string;
  /**
   * Renders a text area rather than an input
   * @default false
   */
  multiline?: boolean;
  /**
   * Name of the input
   */
  name?: string;
  /**
   * ID of the input (required for the label to work)
   */
  id?: string;
  /**
   * Width of the input
   * @default 500px
   */
  width?: string;
  /**
   * Removes the background and shadow of the input. Makes it look like a material design input.
   * @default false
   */
  isMaterial?: boolean;
  /**
   * Class Name for Styled Components
   */
  className?: string;
  /**
   * Does the form has an error
   * @default false
   */
  hasError?: boolean;
  /**
   * If it has error, what  message should be shown
   */
  errorMsg?: string;
  /**
   * Does the form has a warning
   * @default false
   */
  hasWarning?: boolean;
  /**
   * If it has warning, what message should be shown
   */
  warningMsg?: string;
  /**
   * Does the form has a sucessfull state
   * @default false
   */
  hasSuccess?: boolean;
  /**
   * If it has success, what message should be shown
   */
  successMsg?: string;
  /**
   * Is the input disabled
   * @default false
   */
  disabled?: boolean;
}

const Container = styled<any>("div")`
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  font-family: "Nunito Sans", sans-serif;
`;

const Label = styled<any>("label")`
  font-weight: 700;
  font-size: 14px;
  margin-left: 12px;
  margin-bottom: 11px;
  color: ${props => {
    if (props.isMaterial) {
      if (props.hasError) {
        return `#E24C4C`;
      } else if (props.hasWarning) {
        return `#F1A153`;
      } else if (props.hasSuccess) {
        return `#4CE2A7`;
      } else if (props.disabled) {
        return "#CCCCCC";
      }
    } else {
      return "#333333";
    }
  }};
`;

const SInput = styled<any>("input")`
  border: none;
  background-color: ${props => (props.isMaterial ? "transparent" : "white")};
  box-shadow: ${props =>
    props.isMaterial ? "none" : "0px 2px 4px 0px rgba(0, 0, 0, 0.1)"};
  border-radius: ${props =>
    props.isMaterial || props.leftParam ? "0px" : "3px"};
  padding: 12px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 14px;
  color: #333333;
  transition: all 0.2s ease-in-out;
  border-bottom: ${props => {
    if (props.hasError || props.hasWarning || props.hasSuccess) {
      if (props.hasError) {
        return `2px solid #E24C4C`;
      } else if (props.hasWarning) {
        return `2px solid #F1A153`;
      } else if (props.hasSuccess) {
        return `2px solid #4CE2A7`;
      }
    } else {
      if (props.isMaterial) {
        return `2px solid #666666`;
      }
    }
  }};
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
    ${props => {
      if (props.isMaterial) {
        return `border-bottom: 2px solid #2D4EF5`;
      }
    }}
  }
  &:disabled {
    box-shadow: none;
    background-color: ${props => {
      if (!props.isMaterial) {
        return `#ebebeb`;
      }
    }};
    border-bottom: ${props =>
      props.isMaterial ? "2px solid #EBEBEB" : "none"};
  }
`;

const Message = styled<any>("span")`
  margin-top: 10px;
  font-size: 14px;
  margin-left: ${props => (props.isMaterial ? "12px" : "0px")};
  color: ${props => {
    if (props.hasError) {
      return "#E24C4C";
    } else if (props.hasSuccess) {
      return "#4CE2A7";
    } else if (props.hasWarning) {
      return "#F1A153";
    }
  }};
`;

export const Input = ({
  value,
  label,
  placeholder,
  multiline = false,
  isMaterial = false,
  name,
  id,
  width = "500px",
  hasError = false,
  hasWarning = false,
  hasSuccess = false,
  errorMsg,
  warningMsg,
  successMsg,
  disabled = false
}: IProps) => (
  <Container width={width}>
    {label ? (
      <Label
        htmlFor={id}
        isMaterial={isMaterial}
        hasError={hasError}
        hasWarning={hasWarning}
        hasSuccess={hasSuccess}
        disabled={disabled}
      >
        {label}
      </Label>
    ) : null}
    <SInput
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      as={multiline ? "textarea" : "input"}
      isMaterial={isMaterial}
      hasError={hasError}
      hasWarning={hasWarning}
      hasSuccess={hasSuccess}
      disabled={disabled}
    />
    {hasError && (
      <Message hasError isMaterial={isMaterial}>
        {errorMsg}
      </Message>
    )}
    {hasWarning && (
      <Message hasWarning isMaterial={isMaterial}>
        {warningMsg}
      </Message>
    )}
    {hasSuccess && (
      <Message hasSuccess isMaterial={isMaterial}>
        {successMsg}
      </Message>
    )}
  </Container>
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  multiline: PropTypes.bool,
  isMaterial: PropTypes.bool,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  width: PropTypes.string,
  hasError: PropTypes.bool,
  hasWarning: PropTypes.bool,
  hasSuccess: PropTypes.bool,
  errorMsg: PropTypes.string,
  warningMsg: PropTypes.string,
  successMsg: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string
};
