import PropTypes from "prop-types";
import { Card } from "../Card";
import "./Main.scss";
import { MainLayout } from "../Layouts";

export const Main = ({ className }) => (
  <div className={`Main ${className}`}>
    <MainLayout
      BigCard={Card}
      SmallCard1={Card}
      SmallCard2={Card}
      SmallCard3={Card}
      SmallCard4={Card}
    />
  </div>
);

Main.propTypes = {
  className: PropTypes.string,
};
