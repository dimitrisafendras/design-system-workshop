import "./MainLayout.scss";
import PropTypes from "prop-types";

export const MainLayout = ({
  BigCard,
  SmallCard1,
  SmallCard2,
  SmallCard3,
  SmallCard4,
}) => {
  return (
    <div className="Main__layout">
      <BigCard className="Main__bigCard" />
      <SmallCard1 className="Main__smallCard1" />
      <SmallCard2 className="Main__smallCard2" />
      <SmallCard3 className="Main__smallCard3" />
      <SmallCard4 className="Main__smallCard4" />
    </div>
  );
};

MainLayout.propTypes = {
  BigCard: PropTypes.elementType.isRequired,
  SmallCard1: PropTypes.elementType.isRequired,
  SmallCard2: PropTypes.elementType.isRequired,
  SmallCard3: PropTypes.elementType.isRequired,
  SmallCard4: PropTypes.elementType.isRequired,
};
