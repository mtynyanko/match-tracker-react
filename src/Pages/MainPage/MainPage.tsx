import { useEffect } from "react";
import Header from "../../components/Header/Header";
import MatchContainer from "../../components/MatchContainer/MatchContainer";
import { MyDispatch, useTypedSelector } from "../../redux/store";
import { useDispatch } from "react-redux";
import { requestMatchesInfo } from "../../redux/actions/matchActions";
import LoadScreen from "../../components/LoadScreen/LoadScreen";
import "./MainPage.css";

const MainPage = () => {
  const dispatch: MyDispatch = useDispatch()
  const isLoading = useTypedSelector((state) => state.matches.isLoading);

  useEffect(() => {
    dispatch(requestMatchesInfo())
  }, [dispatch])

  return (
    <div className="main-page">
      <Header />
      {isLoading && <LoadScreen />}
      {!isLoading && <MatchContainer />}
    </div>
  )
};
export default MainPage;