import "./helper/Container.scss";
import { Typography } from "../components/Typography";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
const variants = [
  { variant: "h1", children: "Heading 1" },
  { variant: "h2", children: "Heading 2" },
  { variant: "button-text", children: "Button Text" },
  { variant: "subtitle", children: "Subtitle" },
  { variant: "body", children: "Body" },
  { variant: "label", children: "Label" },
];

export const Variants = () => {
  return (
    <div className="container">
      {variants.map((props) => (
        <Typography key={props.variant} {...props} />
      ))}
    </div>
  );
};
