import React from "react";
import PropTypes, { string } from "prop-types";
import styled from "styled-components";
import { Button } from "../Button/button";

interface IProps {
  /**
   * Theme Color of the modal
   * @default primary
   */
  theme?: "primary" | "success" | "error" | "alert" | "dark";
  /**
   * Cancel Text
   * @default Cancel
   */
  cancelText?: string;
  /**
   * Confirm Text
   * @default 'Next Step'
   */
  confirmText?: string;
  /**
   * Title
   */
  title: string;
  /**
   * Support Text
   */
  supportText?: string;
  /**
   * Custom Class Name
   */
  className?: string;
  /**
   * Width
   * @default "480px"
   */
  width?: string;
  /**
   * Function that will be called when the X button is clicked
   * @default null
   */
  onClose?: (...args: any[]) => any;
  /**
   * Function that will be called when the X button is clicked
   * @default null
   */
  onConfirm?: (...args: any[]) => any;
  /**
   * Function that will be called when the X button is clicked
   * @default null
   */
  onCancel?: (...args: any[]) => any;
}

const Container = styled<any>("div")`
  font-family: "Nunito Sans", sans-serif;
  width: ${props => props.width};
  background-color: white;
  box-shadow: 0px 30px 30px 0px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 15px;
  padding-bottom: 40px;
`;

const Top = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 25px;
  span {
    cursor: pointer;
  }
`;

const Content = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.span`
  display: block;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 15px;
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
`;

const Support = styled.span`
  color: #666666;
  font-size: 16px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CancelBtn = styled<any>(Button)`
  color: #999999;
  border-color: #dfdfdf;
`;

export const Modal = ({
  theme = "primary",
  cancelText = "Cancel",
  confirmText = "Next Step",
  title,
  supportText,
  className,
  width = "480px",
  onClose,
  onConfirm,
  onCancel
}: IProps) => (
  <Container theme={theme} className={className} width={width}>
    <Top>
      <span onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="#333333"
        >
          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
        </svg>
      </span>
    </Top>
    <Content>
      <Title theme={theme}>{title}</Title>
      {supportText ? <Support>{supportText}</Support> : null}
    </Content>
    <Buttons>
      <CancelBtn
        onClick={onCancel}
        content={cancelText}
        inverted
        edges={"round-sharp"}
      />
      <Button
        content={confirmText}
        primaryColor={theme}
        edges={"round-sharp"}
        onClick={onConfirm}
      />
    </Buttons>
  </Container>
);

Modal.propTypes = {
  theme: PropTypes.oneOf(["primary", "success", "error", "alert", "dark"]),
  cancelText: PropTypes.string,
  confirmText: PropTypes.string,
  title: PropTypes.string.isRequired,
  supportText: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.string,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func
};
