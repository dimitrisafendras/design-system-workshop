import "./helper/CardLayout.scss";
import "./helper/Container.scss";
import { Card, Typography, Button } from "../components";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const ProductCard = () => {
  return (
    <Card>
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
    </Card>
  );
};
