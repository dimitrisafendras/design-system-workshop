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
  $hasRightIcon = false,
  $hasLeftIcon = false,
  $icon = undefined,
  ...props
}) => {
  return (
    <button
      type="button"
      className={`storybook-button
        storybook-button--${size}
        ${className}`}
      {...props}
    >
      {$hasLeftIcon && $icon}
      {children && <Typography variant="button-text">{children}</Typography>}
      {$hasRightIcon && $icon}
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
  size: PropTypes.oneOf(["medium", "large"]),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Has left icon
   */
  $leftIcon: PropTypes.bool,
  /**
   * Has right icon
   */
  $rightIcon: PropTypes.bool,
  /**
   * Icon Component
   */
  $icon: PropTypes.node,
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
  children: "Button",
  disabled: false,
  onClick: undefined,
  $hasLeftIcon: false,
  $hasRightIcon: false,
  $icon: undefined,
};
