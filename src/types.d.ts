import * as React from "react";

export interface ButtonProps {
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
  /**
   * Class Name for Styled Components
   */
  className?: string;
}

export interface InputProps {
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

export interface IconButtonProps {
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

export class Button extends React.Component<ButtonProps> {}
export class Input extends React.Component<InputProps> {}
export class IconButton extends React.Component<IconButtonProps> {}
