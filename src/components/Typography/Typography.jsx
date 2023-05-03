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
