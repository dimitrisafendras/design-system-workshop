import React from "react";
import { PageLayout } from "../PageLayout";
import { Header } from "../Header";
import { Sidebar } from "..//Sidebar";
import "./Page.scss";

const Main = ({ className }) => (
  <div style={{ backgroundColor: "blue" }} className={className}>
    Main
  </div>
);

export const Page = () => {
  return (
    <PageLayout
      HeaderComponent={Header}
      MainComponent={Main}
      SidebarComponent={Sidebar}
    />
  );
};
