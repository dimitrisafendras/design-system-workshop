import PropTypes from "prop-types";
import { Typography } from "../Typography";
import "./Button.scss";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, size = "medium", children, ...props }) => {
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`].join(" ")}
      {...props}
    >
      <Typography variant="button-text">{children}</Typography>
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
};

Button.defaultProps = {
  size: "medium",
  children: "Button",
  disabled: false,
  onClick: undefined,
};
