import { Typography } from "../Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.scss";
import {
  faGear,
  faHeadphonesSimple,
  faHome,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export const Header = ({ className }) => (
  <header className={`header ${className}`}>
    <div className="logo-container">
      <div className="logo">
        <FontAwesomeIcon icon={faHome} />
      </div>
      <Typography variant="h2">Acme</Typography>
    </div>

    <div className={"wrapper"}>
      <div className="label-container">
        <Typography variant={"h2"}>Link 1</Typography>
        <Typography variant={"h2"}>Link 2</Typography>
        <Typography variant={"h2"}>Link 3</Typography>
      </div>

      <div className="icon-container">
        <FontAwesomeIcon icon={faGear} />
        <FontAwesomeIcon icon={faHeadphonesSimple} />
        <FontAwesomeIcon icon={faLocationDot} />
      </div>
    </div>
  </header>
);
