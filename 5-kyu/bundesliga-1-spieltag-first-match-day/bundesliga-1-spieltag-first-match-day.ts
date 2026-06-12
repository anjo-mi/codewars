 
export type TeamStat = {
  name: string;
  played: number;
  won: number;
  tie: number;
  lost: number;
  diff: string;
  points: number;
  place: number;
}
​
export const parseString = (match:string,table:Record<string,TeamStat>):void => {
  let i = 0;
  while (match[i] !== ' ') i++;
  let [homeScore,awayScore] = match.slice(0,i).split(':');
  const [homeTeam,awayTeam] = match.slice(i+1).split('-').map(team => team.trim());
  if (!(homeTeam in table)) table[homeTeam] = {
    name: homeTeam,
    played: 0,
    won: 0,
    tie: 0,
    lost: 0,
    diff: '0:0',
    points: 0,
    place: 0,
  } as TeamStat;
  if (!(awayTeam in table)) table[awayTeam] = {
    name: awayTeam,
    played: 0,
    won: 0,
    tie: 0,
    lost: 0,
    diff: '0:0',
    points: 0,