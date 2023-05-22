import { PageLayout } from "../PageLayout";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { Main } from "../Main";

export const Page = () => {
  return (
    <PageLayout
      HeaderComponent={Header}
      MainComponent={Main}
      SidebarComponent={Sidebar}
    />
  );
};
