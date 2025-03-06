export interface IPlayer {
  kills: number;
  username: string;
}
export interface ITeam {
  name: string;
  place: number;
  players: IPlayer[];
  points: number;
  total_kills: number;
}
export interface IMatchInfo {
  awayScore: number;
  awayTeam: ITeam;
  homeScore: number;
  homeTeam: ITeam;
  status: string;
  time: string;
  title: string;
}