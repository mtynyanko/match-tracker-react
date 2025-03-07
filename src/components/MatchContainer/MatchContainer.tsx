import { useTypedSelector } from "../../redux/store";
import MatchCard from "../MatchCard/MatchCard";
import "./MatchContainer.css";

const MatchContainer = () => {
  const matches = useTypedSelector((state) => state.matches.matches);

  return (
    <div className="container">
      {matches.map(match => (
        <MatchCard matchInfo={match} />
      ))}
      {/* <MatchCard />
      <MatchCard />
      <MatchCard />
      <MatchCard /> */}
    </div>
  )
};
export default MatchContainer;