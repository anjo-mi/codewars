 
export const inBounds = (r:number,c:number,grid:number[][]):boolean => !(grid.length <= r ||
                                                                         grid.length <= c ||
                                                                         r < 0 ||
                                                                         c < 0);
​
export function mazeRunner(maze:number[][], directions:string[]): string{
  const dirs:Record<string,number[]> = {
    'N': [-1,0],
    'S': [1,0],
    'E': [0,1],
    'W': [0,-1],
  }
  let row = 0;
  let col = 0;
  for (let c = 0 ; c < maze.length ; c++){
    for (let r = 0 ; r < maze.length ; r++){
      if(maze[r][c] === 2){
        row = r;
        col = c;
        break;
      }
    }
  }
  for (const dir of directions){
    const [dr,dc] = dirs[dir];
    row += dr;
    col += dc;
    if (!inBounds(row,col,maze) || maze[row][col] === 1) return 'Dead';
    if (maze[row][col] === 3) return 'Finish';
  }
  return "Lost";
}