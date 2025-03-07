import { all } from "redux-saga/effects";
import watchfetchMatches from "./matchSaga";


export default function* rootSaga() {
  yield all([watchfetchMatches()])
}