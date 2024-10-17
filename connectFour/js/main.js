function whoIsWinner(piecesPositionList){
    let x = new ConnectFour(piecesPositionList)
    return x.parseMove()
}

class ConnectFour{
  constructor(moves){
    this.board = Array(7).fill().map(() => [])
    this.moveList = moves
    this.columnMap = { A:0 , B:1 , C:2 , D:3 , E:4 , F:5 , G:6 }
    this.winner = 'Draw'
  }
  
  parseMove(){
    let x = this.moveList.shift().split('_')
    console.log(x, this.columnMap['C'])
    this.board[this.columnMap[x[0]]].push(x[1])
    return this.board
  }
}