import PropTypes from "prop-types";
import "./Typography.scss";

/**
 * Text component for text display
 */
export const Typography = ({ children, variant = "body", ...props }) => {
  return (
    <div className={[`typography-${variant}`].join(" ")} {...props}>
      {children}
    </div>
  );
};

Typography.propTypes = {
  /**
   * Typography variant
   */
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "button-text",
    "subtitle",
    "body",
    "label",
  ]),
};

Typography.defaultProps = {
  variant: "body",
  children: "Body",
};
