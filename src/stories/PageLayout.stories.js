import "./helper/Container.scss";
import { PageLayout } from "../components";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: "Components/PageLayout",
  component: PageLayout,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "fullscreen",
  },
};

export const Variants = () => {
  const Header = ({ className }) => (
    <div style={{ backgroundColor: "red" }} className={className}>
      Header
    </div>
  );
  const Main = ({ className }) => (
    <div style={{ backgroundColor: "blue" }} className={className}>
      Main
    </div>
  );
  const Sidebar = ({ className }) => (
    <div style={{ backgroundColor: "green" }} className={className}>
      Sidebar
    </div>
  );

  return (
    <PageLayout
      HeaderComponent={Header}
      MainComponent={Main}
      SidebarComponent={Sidebar}
    />
  );
};
