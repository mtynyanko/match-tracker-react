import matchIcon from "../../assets/icons/illustrations_role.svg"
import { IMatchInfo } from "../../types/types.matches";
import "./MatchCard.css";

interface MatchCardProps {
  matchInfo: IMatchInfo;
}

const MatchCard = ({ matchInfo }: MatchCardProps) => {
  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Finished":
        return {color: "#EB0237", text: "Finished", width: 92}
      case "Scheduled":
        return {color: "#EB6402", text: "Match preparing", width: 112}
      default:
        return {color: "#43AD28", text: "Live", width: 92}
    }
  }

  const style = getStatusStyle(matchInfo.status);

  return (<div className="card">
    <div className="team">
      <img src={matchIcon} alt="team-icon" className="team-icon" />
      <p className="team-name">{matchInfo.awayTeam.name}</p>
    </div>
    <div className="score">
      <div className="score-tab">
        <p className="score-number">{matchInfo.awayScore}</p>
        <p className="score-number">:</p>
        <p className="score-number">{matchInfo.homeScore}</p>
      </div>
      <div className="score-status" style={{backgroundColor: style.color, width: style.width}}>
        <p className="text">{style.text}</p>
      </div>
    </div>
    <div className="team">
      <p className="team-name">{matchInfo.homeTeam.name}</p>
      <img src={matchIcon} alt="team-icon" className="team-icon" />
    </div>
  </div>);
};
export default MatchCard;