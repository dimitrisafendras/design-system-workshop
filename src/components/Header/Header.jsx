import { Typography } from "../Typography";
import "./Header.scss";

export const Header = ({ className }) => (
  <header className={`header ${className}`}>
    <div className="logo-container">
      <div className="logo" />
      <Typography variant="h2">Acme</Typography>
    </div>

    <div className="label-container">
      <Typography variant={"h2"}>Link 1</Typography>
      <Typography variant={"h2"}>Link 2</Typography>
      <Typography variant={"h2"}>Link 3</Typography>
    </div>

    <div className="icon-container">
      <div className="icon" />
      <div className="icon" />
      <div className="icon" />
    </div>
  </header>
);
