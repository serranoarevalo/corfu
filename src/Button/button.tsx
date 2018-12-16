import React from "react";
import styled from "styled-components";

const Container = styled.div``;

interface IProps {
  /**
   * Text of the button.
   **/
  text: string;
  /**
   * Preferred HTML Element to render the button
   * @default button
   *
   **/
  element?: "a" | "div" | "button";
}

export const Button = ({ text, element = "button" }: IProps) => {
  return <Container as={element}>{text}</Container>;
};
