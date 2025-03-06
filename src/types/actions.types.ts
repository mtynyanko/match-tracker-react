import { AxiosError } from "axios";
import { FETCH_MATCHES_FAILURE, FETCH_MATCHES_SUCCESS, MATCHES_REQUEST } from "./constants";
import { IMatchInfo } from "./types.matches";

interface IMatchesInfoRequest {
  type: typeof MATCHES_REQUEST;
}
interface IMatchesInfoSuccess {
  type: typeof FETCH_MATCHES_SUCCESS;
  payload: IMatchInfo[];
}
interface IMatchesInfoFailure {
  type: typeof FETCH_MATCHES_FAILURE;
  payload: AxiosError;
}
export type MatchAction = IMatchesInfoRequest | IMatchesInfoSuccess | IMatchesInfoFailure;