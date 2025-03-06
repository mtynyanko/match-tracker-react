import { AxiosResponse } from "axios";
import api from "./api";

export const getMatches = (): Promise<AxiosResponse> => {
  return api.get('fronttemp');
}
