import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../Button";
import { Typography } from "../Typography";
import {
  faFile,
  faHeadphonesSimple,
  faLocationDot,
  faMessage,
  faGear,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.scss";

export const Sidebar = ({ className }) => (
  <div className={`sidebar ${className}`}>
    <div className="sidebar__item">
      <FontAwesomeIcon icon={faFile} size="lg" className="sidebar_icon" />
      <Typography variant="button-text">Menu item 1</Typography>
    </div>
    <div className="sidebar__item">
      <FontAwesomeIcon
        icon={faHeadphonesSimple}
        size="lg"
        className="sidebar_icon"
      />
      <Typography variant="button-text">Menu item 2</Typography>
    </div>
    <div className="sidebar__item">
      <FontAwesomeIcon
        icon={faLocationDot}
        size="lg"
        className="sidebar_icon"
      />
      <Typography variant="button-text">Menu item 3</Typography>
    </div>
    <div className="sidebar__item">
      <FontAwesomeIcon icon={faMessage} size="lg" className="sidebar_icon" />
      <Typography variant="button-text">Menu item 4</Typography>
    </div>
    <div className="divider" />
    <div className="sidebar__item">
      <FontAwesomeIcon icon={faGear} size="lg" className="sidebar_icon" />
      <Typography variant="button-text">Menu item 5</Typography>
    </div>

    <Button className="sidebar__button">
      <FontAwesomeIcon icon={faHome} />
    </Button>
  </div>
);

Sidebar.propTypes = {
  className: PropTypes.string,
};

Sidebar.defaultProps = {};
