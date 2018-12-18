import React from "react";
import styled from "styled-components";

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
  font-weight: 600;
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

interface IProps {
  /**
   * Text of the button.
   **/
  content: string;
  /**
   * Preferred HTML Element to render the button
   * @default button
   *
   **/
  element?: "a" | "div" | "button";
  /**
   * Edge Style of the button
   * @default sharp
   *
   **/
  edges?: "sharp" | "rounded" | "round-sharp";
  /**
   * Background Color
   * @default primary
   *
   **/
  primaryColor?: "primary" | "success" | "error" | "alert" | "dark";
  /**
   * Transparent Background and colored border and content
   * @default false
   *
   **/
  inverted?: boolean;
  /**
   * href attribute for the button link
   *
   *
   **/
  href?: string;
}

export const Button = ({
  content,
  element = "button",
  edges = "sharp",
  primaryColor = "primary",
  inverted = false,
  href
}: IProps) => {
  return (
    <Container
      as={element}
      edges={edges}
      primaryColor={primaryColor}
      inverted={inverted}
      href={href}
    >
      {content}
    </Container>
  );
};
