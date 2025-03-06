import matchIcon from "../../assets/icons/illustrations_role.svg"
import "./MatchCard.css";


const MatchCard = () => {
  return (<div className="card">
    <div className="team">
      <img src={matchIcon} alt="team-icon" className="team-icon" />
      <p className="team-name">Command №1</p>
    </div>
    <div className="score">
      <div className="score-tab">
        <p className="score-number">2</p>
        <p className="score-number">:</p>
        <p className="score-number">2</p>
      </div>
      <div className="score-status">
        <p className="text">Live</p>
      </div>
    </div>
    <div className="team">
      <p className="team-name">Command №2</p>
      <img src={matchIcon} alt="team-icon" className="team-icon" />
    </div>
  </div>);
};
export default MatchCard;