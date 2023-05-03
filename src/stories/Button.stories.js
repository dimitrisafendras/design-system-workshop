import "./helper/Container.scss";
import { Button } from "../components/Button";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
const variants = [
  { size: "large", children: "Large" },
  { size: "medium", children: "Medium" },
  { size: "medium", children: "Medium", disabled: true },
];

export const Variants = () => {
  return (
    <div className="container">
      {variants.map((props, index) => (
        <Button key={`${props.size}-${index}`} {...props} />
      ))}
    </div>
  );
};
