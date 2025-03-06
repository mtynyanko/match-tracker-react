import { IMatchInfo } from "./types.matches";

export interface IMatchesState {
  matches: IMatchInfo[];
  isLoading: boolean;
  error: Error | null;
}