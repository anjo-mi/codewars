function whoIsWinner(piecesPositionList){
    let x = new ConnectFour(piecesPositionList)
    x.generateWholeGame()
    return x.winner
}

class ConnectFour{
  constructor(moves){
    this.board = Array(7).fill().map(() => [])
    this.moveList = moves
    this.columnMap = { A:0 , B:1 , C:2 , D:3 , E:4 , F:5 , G:6 }
    this.winner = 'Draw'
    this.gameOver = false
  }
  
  generateWholeGame(){
    this.moveList.forEach(el => {
      this.parseMove(el.split('_'))
    })
  }
  
  parseMove(rowAndColor){
//     let rowAndColor = this.moveList.shift().split('_')
    let x = this.columnMap[rowAndColor[0]]
    this.board[x].push(rowAndColor[1])
    let y = this.board[x].lastIndexOf(rowAndColor[1])
    console.log(x,y,rowAndColor[1])
    this.checkWin(x,y,rowAndColor[1])
  }
  checkWin(x , y , color){
    if (this.gameOver) return this.winner
    const directions = [
      [0,1] , [1,0] , [1,1]  , [1,-1] 
     //,[0,-1], [-1,0], [-1,-1], [-1,1]
    ]
    
    for (let [dx , dy] of directions){
      let count = 1
      
      for (let i = 1 ; i < 4 ; i++){
        let nx = x + i * dx
        let ny = y + i * dy
        if (nx < 0 || nx >= this.board.length || ny < 0 || ny >= this.board[nx].length) break
        if (this.board[nx][ny] !== color) break
        count++
      }
      
      for (let i = 1 ; i < 4 ; i++){
        let nx = x - i * dx
        let ny = y - i * dy
        if (nx < 0 || nx >= this.board.length || ny < 0 || ny >= this.board[nx].length) break
        if (this.board[nx][ny] !== color) break
        count++
      }
      
      if (count >= 4){
        this.winner = color
        this.gameOver = true
      }
    }
    
  }
  
}


console.log(whoIsWinner(["C_Yellow",
    "E_Red",
    "G_Yellow",
    "B_Red",
    "D_Yellow",
    "B_Red",
    "B_Yellow",
    "G_Red",
    "C_Yellow",
    "C_Red",
    "D_Yellow",
    "F_Red",
    "E_Yellow",
    "A_Red",
    "A_Yellow",
    "G_Red",
    "A_Yellow",
    "F_Red",
    "F_Yellow",
    "D_Red",
    "B_Yellow",
    "E_Red",
    "D_Yellow",
    "A_Red",
    "G_Yellow",
    "D_Red",
    "D_Yellow",
    "C_Red"]), "Yellow");
console.log(whoIsWinner(["A_Yellow",
          "B_Red",
          "B_Yellow",
          "C_Red",
          "G_Yellow",
          "C_Red",
          "C_Yellow",
          "D_Red",
          "G_Yellow",
          "D_Red",
          "G_Yellow",
          "D_Red",
          "F_Yellow",
          "E_Red",
          "D_Yellow"]), "Red");
console.log(whoIsWinner([ "A_Red",
          "B_Yellow",
          "A_Red",
          "E_Yellow",
          "F_Red",
          "G_Yellow"]), "Draw");