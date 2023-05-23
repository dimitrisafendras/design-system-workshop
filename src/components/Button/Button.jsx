import PropTypes from "prop-types";
import { Typography } from "../Typography";
import "./Button.scss";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary,
  size = "medium",
  className,
  children,
  rightIcon,
  leftIcon,
  shape,
  ...props
}) => {
  return (
    <button
      type="button"
      className={`storybook-button
        storybook-button--${size}
        storybook-button--${shape}
        ${className}`}
      {...props}
    >
      {leftIcon && leftIcon}
      {children && <Typography variant="button-text">{children}</Typography>}
      {rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  /**
   * Disabled state
   */
  disabled: PropTypes.bool,
  /**
   * Button size
   */
  size: PropTypes.oneOf(["large", "medium", "small"]),
  /**
   * Button shape
   */ shape: PropTypes.oneOf(["round", "square", "rounded-corner"]),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Left icon
   */
  leftIcon: PropTypes.node,
  /**
   * Right icon
   */
  rightIcon: PropTypes.node,
  /**
   * Content of the button
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Button.defaultProps = {
  size: "medium",
  children: "",
  disabled: false,
  onClick: undefined,
  leftIcon: null,
  rightIcon: null,
  shape: "rounded-corner",
};
