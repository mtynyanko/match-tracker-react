import { useDispatch } from "react-redux";
import refreshIcon from "../../assets/icons/Refresh.svg"
import { MyDispatch, useTypedSelector } from "../../redux/store";
import ErrorNotice from "../ErrorNotice/ErrorNotice";
import "./Header.css"
import { requestMatchesInfo } from "../../redux/actions/matchActions";

const Header = () => {
  const error = useTypedSelector((state) => state.matches.error);
  const dispatch: MyDispatch  = useDispatch();

  return (
    <div className="header">
      <p className="title">Match Tracker</p>
      <div className="side-content">
      {error && <ErrorNotice message={error?.message} />}
        <button className="refresh-button" onClick={() => dispatch(requestMatchesInfo())}>
          <p className="button-text">Обновить</p>
          <img src={refreshIcon} alt="refresh-icon" className="button-icon" />
        </button>
      </div>
      
    </div>
  );
};
export default Header;