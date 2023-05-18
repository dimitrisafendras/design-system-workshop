import "./PageLayout.scss";

export const PageLayout = ({
  HeaderComponent,
  MainComponent,
  FooterComponent,
  SidebarComponent,
}) => (
  <div className="PageLayout">
    <HeaderComponent className={"PageLayout__header"} />
    <MainComponent className={"PageLayout__main"} />
    <SidebarComponent className={"PageLayout__sidebar"} />
    <FooterComponent className={"PageLayout__footer"} />
  </div>
);
