import { Fragment } from "react";

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

const sidebarItems = [
  {
    id: 1,
    icon: faFile,
    text: "Menu item 1",
  },
  {
    id: 2,
    icon: faHeadphonesSimple,
    text: "Menu item 2",
  },
  {
    id: 3,
    icon: faLocationDot,
    text: "Menu item 3",
  },
  {
    id: 4,
    icon: faMessage,
    text: "Menu item 4",
  },
  {
    id: 5,
    icon: faGear,
    text: "Menu item 5",
  },
];

export const Sidebar = ({ className }) => (
  <div className={`sidebar ${className}`}>
    {sidebarItems.map(({ id, icon, text }, index) => (
      <Fragment key={id}>
        <div className="sidebar__item">
          <FontAwesomeIcon icon={icon} size="lg" className="sidebar_icon" />
          <Typography
            variant="button-text"
            customClassName="sidebar__button-text"
          >
            {text}
          </Typography>
        </div>
        {index === 3 && <div className="sidebar__divider" />}
      </Fragment>
    ))}

    <Button
      className="sidebar__button"
      shape="round"
      size="small"
      leftIcon={
        <FontAwesomeIcon icon={faHome} className="sidebar__button-icon" />
      }
    />
  </div>
);

Sidebar.propTypes = {
  className: PropTypes.string,
};

Sidebar.defaultProps = {};
