import { Typography } from "../components/Typography";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const H1 = {
  args: {
    children: <>h1</>,
    variant: "h1",
  },
};
