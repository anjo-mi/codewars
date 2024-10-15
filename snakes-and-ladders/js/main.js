class SnakesLadders{
    constructor(){
        this.p1 = new Player(1)
        this.p2 = new Player(2)
        this.turn = this.p1
        this.ladders = [ [2,38] ,  [7,14] ,  [8,31] ,  [15,26] , [21,42] , [28,84] ,  [36,44] , [51,67] , [71,91] , [78,98] , [87,94] ]
        this.snakes =  [ [99,80] , [95,75] , [92,88] , [89,68] , [74,53] , [64,60] ,  [62,19] , [49,11] , [46,25] , [16,6] ]
        this.board = {}
        this.createBoard()
    }

    createBoard(){
        let obj = {}
        for (let i = 0 ; i < this.ladders.length ; i++){
            obj[ this.ladders[i][0] ] = this.ladders[i][1]
        }
        for (let i = 0 ; i < this.snakes.length ; i++){
            obj[ this.snakes[i][0] ] = this.snakes[i][1]
        }
        for (let i = 1 ; i <= 100 ; i++){
            if(!obj[i]){
                obj[i] = i
            }
        }
        this.board = obj
    }

    play(a,b){
        this.turn.position += (a + b)
        this.checkPosition()
        let x = this.turn.name
        let y = this.turn.position
        if (a !== b ){
            this.turn = this.turn == this.p1 ? this.p2 : this.p1
        }
        return y === 100 ? `${x} Wins!` : `${x} is on square ${y}`
    }

    checkPosition(){
        if (this.turn.position > 100) this.turn.position = 100 - (this.turn.position - 100)
        this.turn.position = this.board[this.turn.position]
        if (this.turn.position === 100) this.endGame()
    }

    endGame(){
        this.play = function (){
            return `Game over!`
        }
    }
}

// SnakesLadders.prototype.play = function(die1, die2) {

// }


class Player{
    constructor(num){
        this.name = `Player ${num}`
        this.position = 0
    }
}