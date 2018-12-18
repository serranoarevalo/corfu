import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ButtonProps } from "../types";

const Container = styled<any>("div")`
  padding: 15px 25px;
  font-size: 14px;
  background: none;
  border: none;
  color: ${props => {
    if (props.inverted) {
      if (props.primaryColor === "primary") {
        return "#2D4EF5";
      } else if (props.primaryColor === "success") {
        return "#4CE2A7";
      } else if (props.primaryColor === "error") {
        return "#E24C4C";
      } else if (props.primaryColor === "alert") {
        return "#F1A153";
      } else if (props.primaryColor === "dark") {
        return "#022047";
      }
    } else {
      return "white";
    }
  }};
  font-weight: 700;
  font-family: "Nunito Sans", sans-serif;
  &:active,
  &:focus {
    outline: none;
  }
  box-sizing: border-box;
  border: ${props => {
    if (props.inverted) {
      if (props.primaryColor === "primary") {
        return "2px solid #2D4EF5";
      } else if (props.primaryColor === "success") {
        return "2px solid #4CE2A7";
      } else if (props.primaryColor === "error") {
        return "2px solid #E24C4C";
      } else if (props.primaryColor === "alert") {
        return "2px solid #F1A153";
      } else if (props.primaryColor === "dark") {
        return "2px solid #022047";
      }
    } else {
      return "none";
    }
  }};
  background-color: ${props => {
    if (props.inverted) {
      return "transparent";
    } else {
      if (props.primaryColor === "primary") {
        return "#2D4EF5";
      } else if (props.primaryColor === "success") {
        return "#4CE2A7";
      } else if (props.primaryColor === "error") {
        return "#E24C4C";
      } else if (props.primaryColor === "alert") {
        return "#F1A153";
      } else if (props.primaryColor === "dark") {
        return "#022047";
      }
    }
  }};
  border-radius: ${props => {
    if (props.edges === "sharp") {
      return "0px";
    } else if (props.edges === "rounded") {
      return "25px";
    } else if (props.edges === "round-sharp") {
      return "3px";
    }
  }};
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 1;
  }
  cursor: pointer;
  box-shadow: 0px 10px 25px
    ${props => {
      if (props.inverted) {
        return "none";
      } else {
        if (props.primaryColor === "primary") {
          return "rgba(45, 78, 245, 0.5)";
        } else if (props.primaryColor === "success") {
          return "rgba(76, 226, 167, 0.5)";
        } else if (props.primaryColor === "error") {
          return "rgba(226, 76, 76, 0.5)";
        } else if (props.primaryColor === "alert") {
          return "rgba(241, 161, 83, 0.5)";
        } else if (props.primaryColor === "dark") {
          return "rgba(2, 32, 71, 0.5)";
        }
      }
    }};
`;

export const Button = ({
  content,
  element = "button",
  edges = "sharp",
  primaryColor = "primary",
  inverted = false,
  href,
  className
}: ButtonProps) => {
  return (
    <Container
      as={element}
      edges={edges}
      primaryColor={primaryColor}
      inverted={inverted}
      href={href}
      className={className}
    >
      {content}
    </Container>
  );
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
  element: PropTypes.oneOf(["a", "div", "button"]),
  edges: PropTypes.oneOf(["sharp", "rounded", "round-sharp"]),
  primaryColor: PropTypes.oneOf([
    "primary",
    "success",
    "error",
    "alert",
    "dark"
  ]),
  inverted: PropTypes.bool,
  href: PropTypes.string
};
