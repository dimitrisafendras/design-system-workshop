import "./Card.scss";

/**
 * Card component
 */
export const Card = ({ children, ...props }) => {
  return (
    <div className={"storybook-card"} {...props}>
      {children}
    </div>
  );
};
