import { AxiosError } from "axios";
import { MatchAction } from "../../types/actions.types";
import { FETCH_MATCHES_FAILURE, FETCH_MATCHES_SUCCESS, MATCHES_REQUEST } from "../../types/constants";
import { IMatchInfo } from "../../types/types.matches";

export const requestMatchesInfo = (): MatchAction => ({
  type: MATCHES_REQUEST,
})
export const fetchMatchesInfoSuccess = (matches: IMatchInfo[]): MatchAction => ({
  type: FETCH_MATCHES_SUCCESS,
  payload: matches,
})
export const fetchMatchesInfoFailure = (error: AxiosError): MatchAction => ({
  type: FETCH_MATCHES_FAILURE,
  payload: error,
})