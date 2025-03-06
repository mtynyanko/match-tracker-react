import { AxiosResponse } from "axios";
import api from "./api";
import { IMatchInfo } from "../types/types.matches";

export const getMatches = (): Promise<AxiosResponse<IMatchInfo[]>> => {
  return api.get('fronttemp');
}
