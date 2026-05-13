 
import { fetch } from './preloaded';
​
export interface IJokeResponse {
  id: number;
  setup: string;
  punchLine: string;
}
​
export function isValid (joke:any): joke is IJokeResponse {
  return joke &&
    typeof joke.id === 'number' &&
    typeof joke.setup === 'string' &&
    typeof joke.punchLine === 'string';
}
​
export async function sayJoke(apiUrl: string, jokeId: number) {
  const response = await fetch(apiUrl);
  if (!response) throw new Error(`No jokes at url: ${apiUrl}`);
  const data = await response.json();
  if (!data?.jokes || !Array.isArray(data.jokes)) 
    throw new Error(`No jokes at url: ${apiUrl}`);
​
  const joke = data.jokes.find((j: any) => j.id === jokeId) as IJokeResponse | undefined;
  if (!joke) throw new Error(`No jokes found id: ${jokeId}`);
​
  if (!isValid(joke)) throw new Error(`No jokes at url: ${apiUrl}`);
​
  return {
    saySetup: () => joke.setup,
    sayPunchLine: () => joke.punchLine,
  };
}