import React from "react";
import { PageLayout } from "../PageLayout";
import { Header } from "../Header";
import "./Page.scss";

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

export const Page = () => {
  return (
    <PageLayout
      HeaderComponent={Header}
      MainComponent={Main}
      SidebarComponent={Sidebar}
      FooterComponent={Footer}
    />
  );
};
