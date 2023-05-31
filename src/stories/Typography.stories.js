import "./helper/Container.scss";
import { Typography } from "../components";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
const variants = [{ variant: "h1", children: "Heading 1" }];

export const Variants = () => {
  return (
    <div className="container">
      {variants.map((props) => (
        <Typography key={props.variant} {...props} />
      ))}
    </div>
  );
};

export const Base = {
  args: {
    children: "Heading 1",
    variant: "h1",
  },
};
