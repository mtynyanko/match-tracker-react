import { useEffect } from "react";
import Header from "../../components/Header/Header";
import MatchContainer from "../../components/MatchContainer/MatchContainer";
import { getMatches } from "../../api/apiMatches";
import "./MainPage.css";


const MainPage = () => {
  useEffect(() => {
    getMatches()
    .then(response => {
      console.log(response.data.data.matches)
    })
  })


  return (
    <div className="main-page">
      <Header />
      <MatchContainer />
    </div>
  )
};
export default MainPage;