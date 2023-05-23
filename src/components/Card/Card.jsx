import "./Card.scss";
import { Button } from "../Button";
import { Typography } from "../Typography";

/**
 * Card component
 */
export const Card = ({ className, children, ...props }) => {
  return (
    <div className={`storybook-card ${className}`} {...props}>
      <div className="card-content">
        <img src={"/images/product-card.png"} alt="Product Card" />
        <Typography variant="h2">Card Title</Typography>
        <Typography variant="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Typography>
      </div>
      <Button>Button Label</Button>
    </div>
  );
};
