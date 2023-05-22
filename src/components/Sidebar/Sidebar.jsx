import PropTypes from "prop-types";
import { Button } from "../Button";
import { Typography } from "../Typography";
import "./Sidebar.scss";

export const Sidebar = ({ className }) => (
  <div className={`sidebar ${className}`}>
    <div className="sidebar__item">
      <div className="sidebar_icon" />
      <Typography variant="h2">Menu item 1</Typography>
    </div>
    <div className="sidebar__item">
      <div className="sidebar_icon" />
      <Typography variant="h2">Menu item 2</Typography>
    </div>
    <div className="sidebar__item">
      <div className="sidebar_icon" />
      <Typography variant="h2">Menu item 3</Typography>
    </div>
    <Button className="sidebar__button">B</Button>
  </div>
);

Sidebar.propTypes = {
  className: PropTypes.string,
};

Sidebar.defaultProps = {};
