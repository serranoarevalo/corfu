import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

interface IProps {
  /**
   * Is the Switch On or Off
   * @default true
   */
  on?: boolean;
  /**
   * Custom Class Name
   */
  className?: string;
}

const Container = styled.div`
  background-color: white;
  width: 50px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  border-radius: 22px;
  display: flex;
  padding: 4px;
  align-items: center;
  cursor: pointer;
  font-family: "Nunito Sans", sans-serif;
`;

const Circle = styled<any>("div")`
  height: 20px;
  transition: all 0.2s ease-in-out;
  transform: ${props => (props.on ? "translatex(30px)" : "none")};
  svg {
    transition: all 0.2s ease-in-out;
    fill: ${props => (props.on ? "#2D4EF5" : "#E5E5E5")};
  }
`;

export const Switch = ({ on = true, className }: IProps) => (
  <Container className={className}>
    <Circle on={on}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="12" />
      </svg>
    </Circle>
  </Container>
);

Switch.propTypes = {
  on: PropTypes.bool
};
