import refreshIcon from "../../assets/icons/Refresh.svg"
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <p className="title">Match Tracker</p>
      <button className="refresh-button">
        <p className="button-text">Обновить</p>
        <img src={refreshIcon} alt="refresh-icon" className="button-icon" />
      </button>
    </div>
  );
};
export default Header;