import React from "react";
import styled from "styled-components";

const Container = styled<any>("div")``;

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
  bgColor?: "primary" | "success" | "error" | "alert" | "dark";
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
  bgColor = "primary",
  inverted = false,
  href
}: IProps) => {
  return (
    <Container
      as={element}
      edges={edges}
      bgColor={bgColor}
      inverted={inverted}
      href={href}
    >
      {content}
    </Container>
  );
};
