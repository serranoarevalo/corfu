import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

interface IProps {
  /**
   * Text inside of the tag
   */
  text: string;
  /**
   * Edge style of the tag
   * @default sharp
   */
  edges?: "sharp" | "rounded" | "round-sharp";
  /**
   * Background color of the tag
   * @default primary
   */
  bgColor?: "primary" | "success" | "error" | "alert" | "dark";
}

const Container = styled<any>("span")`
  background-color: ${props => {
    if (props.bgColor === "primary") {
      return "#2D4EF5";
    } else if (props.bgColor === "success") {
      return "#4CE2A7";
    } else if (props.bgColor === "error") {
      return "#E24C4C";
    } else if (props.bgColor === "alert") {
      return "#F1A153";
    } else if (props.bgColor === "dark") {
      return "#022047";
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
  font-family: "Nunito Sans", sans-serif;
  padding: 5px 10px;
  color: white;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  padding-top: 6px;
  line-height: 1;
`;

export const Tag = ({ text, edges = "sharp", bgColor = "primary" }: IProps) => (
  <Container bgColor={bgColor} edges={edges}>
    {text}
  </Container>
);

Tag.propTypes = {
  text: PropTypes.string,
  edges: PropTypes.oneOf(["sharp", "rounded", "round-sharp"]),
  bgColor: PropTypes.oneOf(["primary", "success", "error", "alert", "dark"])
};
