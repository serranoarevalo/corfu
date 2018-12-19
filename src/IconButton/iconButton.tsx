import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

interface IProps {
  /**
   * HTML Element
   **/
  icon: any;
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
   * href attribute for the button link
   **/
  href?: string;
  /**
   * Class Name for Styled Components
   */
  className?: string;
  /**
   * Button width
   * @default 25px
   */
  width?: string;
  /**
   * Button height
   * @default 25px
   */
  height?: string;
}

const Container = styled<any>("button")`
  background: none;
  border: none;
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 10px 25px
    ${props => {
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
    }};
  background-color: ${props => {
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
  }};
  border-radius: ${props => {
    if (props.edges === "sharp") {
      return "0px";
    } else if (props.edges === "rounded") {
      return "50%";
    } else if (props.edges === "round-sharp") {
      return "3px";
    }
  }};
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 1;
  }
`;

export const IconButton = ({
  icon,
  element = "button",
  edges = "sharp",
  primaryColor = "primary",
  href,
  className,
  width = "50px",
  height = "50px"
}: IProps) => (
  <Container
    className={className}
    edges={edges}
    primaryColor={primaryColor}
    as={element}
    href={href}
    width={width}
    height={height}
  >
    {icon}
  </Container>
);

IconButton.propTypes = {
  icon: PropTypes.any.isRequired,
  element: PropTypes.oneOf(["a", "div", "button"]),
  edges: PropTypes.oneOf(["sharp", "rounded", "round-sharp"]),
  primaryColor: PropTypes.oneOf([
    "primary",
    "success",
    "error",
    "alert",
    "dark"
  ]),
  href: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};
