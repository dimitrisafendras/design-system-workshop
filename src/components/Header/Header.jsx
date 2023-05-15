import PropTypes from "prop-types";
import { Typography } from "../Typography";
import "./Header.scss";

export const Header = () => (
  <header className="header">
    <div className="logo-container">
      <div className="logo" />
      <Typography variant="h1">Acme</Typography>
    </div>

    <div className="label-container">
      <Typography variant={"label"}>Link 1</Typography>
      <Typography variant={"label"}>Link 2</Typography>
      <Typography variant={"label"}>Link 3</Typography>
    </div>

    <div className="icon-container">
      <div className="icon" />
      <div className="icon" />
      <div className="icon" />
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
