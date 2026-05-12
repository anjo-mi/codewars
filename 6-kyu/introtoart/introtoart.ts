 
export function getW(height: number) {
  if (height < 2) return [];
  let tops:number = 0;
  let currPos:number[] = [0,0];
  let dir:number = 1;
  const filled:string[][] = Array(height).fill(null).map(e => Array(4 *(height-1) + 1).fill(null).map(el => ' '));
  while (tops < 3){
    const [r,c] = currPos;
    filled[r][c] = '*'
    if (r === 0){
      tops++;
      dir = 1;
    }else if(r === height - 1){
      dir = -1;
    }
    currPos[0] += (1 * dir);
    currPos[1] += 1;
  }
  return filled.map(row => row.join(''));
}