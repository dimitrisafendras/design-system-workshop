import "./helper/Container.scss";
import { Button } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const variants = [
  { size: "large", children: "Large" },
  { size: "medium", children: "Medium" },
  { size: "medium", children: "Medium", disabled: true },
  {
    size: "medium",
    children: "Left Icon Medium",
    $hasLeftIcon: true,
    $icon: <FontAwesomeIcon icon={faFile} />,
  },
  {
    size: "medium",
    children: "Right Icon Medium",
    $hasRightIcon: true,
    $icon: <FontAwesomeIcon icon={faFile} />,
  },
  {
    size: "medium",
    children: null,
    $hasRightIcon: true,
    $icon: <FontAwesomeIcon icon={faFile} />,
  },
];

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export const Variants = () => {
  return (
    <div className="container">
      {variants.map((props, index) => (
        <Button key={`${props.size}-${index}`} {...props} />
      ))}
    </div>
  );
};

export const Base = {
  args: {
    size: "large",
    children: "Button",
    disabled: false,
  },
};
