import "./PageLayout.scss";
import PropTypes from "prop-types";

export const PageLayout = ({
  HeaderComponent,
  MainComponent,
  SidebarComponent,
}) => (
  <div className="PageLayout">
    <HeaderComponent className={"PageLayout__header"} />
    <MainComponent className={"PageLayout__main"} />
    <SidebarComponent className={"PageLayout__sidebar"} />
  </div>
);

PageLayout.propTypes = {
  /**
   * Header component
   */
  HeaderComponent: PropTypes.elementType,
  /**
   * Main component
   */
  MainComponent: PropTypes.elementType,
  /**
   * Sidebar component
   */
  SidebarComponent: PropTypes.elementType,
};
