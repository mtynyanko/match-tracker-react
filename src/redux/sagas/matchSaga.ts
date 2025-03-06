import { AxiosError, AxiosResponse } from "axios";
import { IMatchInfo } from "../../types/types.matches";
import { getMatches } from "../../api/apiMatches";
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchMatchesInfoFailure, fetchMatchesInfoSuccess } from "../actions/matchActions";
import { MATCHES_REQUEST } from "../../types/constants";

function* fetchMatches() {
  try {
    const response: AxiosResponse<IMatchInfo[]> = yield call(getMatches);
    yield put(fetchMatchesInfoSuccess(response.data))
  } catch (error) {
    const currentError = error instanceof AxiosError;
    yield currentError
      ? put(fetchMatchesInfoFailure(error))
      : put(fetchMatchesInfoFailure(new AxiosError('unknown error')));
  }
}

export default function* watchfetchMatches() {
  yield takeEvery(MATCHES_REQUEST, fetchMatches);
}