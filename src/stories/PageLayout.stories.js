import "./helper/Container.scss";
import React from "react";
import { PageLayout } from "../components";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: "Components/PageLayout",
  component: PageLayout,
  tags: ["autodocs"],
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
  const Footer = ({ className }) => (
    <div style={{ backgroundColor: "yellow" }} className={className}>
      Footer
    </div>
  );

  return (
    <PageLayout
      HeaderComponent={Header}
      MainComponent={Main}
      SidebarComponent={Sidebar}
      FooterComponent={Footer}
    />
  );
};