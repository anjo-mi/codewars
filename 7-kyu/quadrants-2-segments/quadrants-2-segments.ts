 
import {Coord} from "./preloaded";
export function quadrantSegment(A: Coord, B: Coord): boolean {
  return Math.sign(A.x) !== Math.sign(B.x) || Math.sign(A.y) !== Math.sign(B.y);
}