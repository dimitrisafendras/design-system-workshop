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
        {/*<img src={"/images/product-card.png"} alt="Product Card" />*/}
        <Typography variant="h2">Card Title</Typography>
        <Typography variant="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </Typography>
      </div>
      <Button>Button Label</Button>
    </div>
  );
};
