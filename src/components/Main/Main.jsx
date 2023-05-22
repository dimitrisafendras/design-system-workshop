import { Card } from "../Card";
import "./Main.scss";

export const Main = ({ className }) => (
  <div className={`Main ${className}`}>
    <div className="Main__layout">
      <Card className="Main__bigCard" />
      <Card className="Main__smallCard1" />
      <Card className="Main__smallCard2" />
      <Card className="Main__smallCard3" />
      <Card className="Main__smallCard4" />
    </div>
  </div>
);
