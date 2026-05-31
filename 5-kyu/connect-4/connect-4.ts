 
export const dirs:number[][] = [
  [1,0],
  [-1,0],
  [0,1],
  [0,-1],
  [1,1],
  [1,-1],
  [-1,1],
  [-1,-1],
];
​
export class Connect4 {
  board:string[][]
  winner:string | undefined;
  turn:number;
  player: () => string;
  constructor() {
    this.board = Array(6).fill(null).map(el => Array(7).fill(null).map(e => ''));
    this.winner = undefined;
    this.turn = 1;
    this.player = () => this.turn % 2 ? 'R' : 'Y';
  }
  
  checkWin(row:number,col:number):boolean{
    const player = this.board[row][col];
    for (const [dr,dc] of dirs){
      let [nr,nc] = [row+dr,col+dc];
      let streak = 1;
      while (this.inBounds(nr,nc) && this.board[nr][nc] === player){
        streak++;
        if (streak === 4){
          this.winner = this.turn % 2 ? 'Player 1' : 'Player 2';
          return true;
        }
        [nr,nc] = [nr+dr,nc+dc];
      }
    }
    return false;
  }
  
  checkOpen(row:number,col:number):boolean{
    if (!this.inBounds(row,col)) return false;
    if (this.board[row][col]) return false;
    return true;
  }
  
  inBounds(row:number,col:number):boolean{
    if (row < 0 || row >= 6 || col < 0 || col >= 7) return false;
    return true;
  }