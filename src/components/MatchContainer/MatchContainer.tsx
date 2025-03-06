import MatchCard from "../MatchCard/MatchCard";
import "./MatchContainer.css";

const MatchContainer = () => {
  return (
    <div className="container">
      <MatchCard />
      <MatchCard />
      <MatchCard />
      <MatchCard />
    </div>
  )
};
export default MatchContainer;