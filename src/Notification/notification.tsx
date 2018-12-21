import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

interface IProps {
  /**
   * Theme Color of the notifications
   * @default primary
   */
  theme?: "primary" | "success" | "error" | "alert" | "dark";
  /**
   * Icon element (can be a span, emoji, react element)
   */
  icon?: any;
  /**
   * Text of the Notifications
   */
  text: string;
  /**
   * Function that will be called when the X button is clicked
   * @default null
   */
  onClose?: (...args: any[]) => any;
  /**
   * Width of the notification
   * @default 550px
   */
  width?: string;
  /**
   * Custom Class Name
   */
  className?: string;
}

const Icon = styled.div`
  padding: 15px;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 18px;
`;

const Text = styled.span`
  font-size: 16px;
`;

const Close = styled.div`
  cursor: pointer;
  margin-left: auto;
  svg {
    fill: #333333;
  }
`;

const Container = styled<any>("div")`
  font-family: "Nunito Sans", sans-serif;
  width: ${props => props.width};
  display: flex;
  align-items: center;
  border-radius: 3px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  padding-right: 15px;
  ${Icon} {
    background-color: ${props => {
      if (props.theme === "primary") {
        return "#2D4EF5";
      } else if (props.theme === "success") {
        return "#4CE2A7";
      } else if (props.theme === "error") {
        return "#E24C4C";
      } else if (props.theme === "alert") {
        return "#F1A153";
      } else if (props.theme === "dark") {
        return "#022047";
      }
    }};
  }
  ${Text} {
    color: ${props => {
      if (props.theme === "primary") {
        return "#2D4EF5";
      } else if (props.theme === "success") {
        return "#4CE2A7";
      } else if (props.theme === "error") {
        return "#E24C4C";
      } else if (props.theme === "alert") {
        return "#F1A153";
      } else if (props.theme === "dark") {
        return "#022047";
      }
    }};
  }
`;

export const Notification = ({
  theme = "primary",
  icon,
  text,
  onClose,
  width = "550px",
  className
}: IProps) => (
  <Container className={className} theme={theme} width={width}>
    <Icon>{icon}</Icon>
    <Text>{text}</Text>
    <Close onClick={onClose}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
      >
        <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
      </svg>
    </Close>
  </Container>
);

Notification.propTypes = {
  theme: PropTypes.oneOf(["primary", "success", "error", "alert", "dark"]),
  text: PropTypes.string.isRequired,
  icon: PropTypes.any,
  onClose: PropTypes.func,
  width: PropTypes.string,
  className: PropTypes.string
};
