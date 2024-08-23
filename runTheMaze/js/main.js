function mazeRunner(maze, directions) {
    let first = -1
    let second = -1
    for (let i = 0 ; i < maze.length ; i++){
      if (maze[i].includes(2)){
          first = i
          second = maze[i].indexOf(2)
      }
    }
    let placeOnBoard = []
    for (let i = 0 ; i < directions.length ; i++){
      if (directions[i] === 'N') {first--}
      if (directions[i] === 'S') {first++}
      if (directions[i] === 'E') {second++}
      if (directions[i] === 'W') {second--}
      if (first > maze.length - 1 || first < 0){
        return 'dead'
      }
      if (second > maze[first].length - 1 || second < 0){
        return 'dead'
      }
      if (maze[first][second] === 1){
        return 'dead'
      }
      placeOnBoard.push(maze[first][second])
      if (maze[first][second] === 3){
        return 'alive'
      }

    }
    if (placeOnBoard.every(el => el === 0)) return 'lost'
  }

  var maze = [[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,3],
            [1,0,1,0,1,0,1],
            [0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]]

console.log(mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E"]))
console.log(mazeRunner(maze,["N","N","N","N","N","E","E","S","S","E","E","N","N","E"]))
console.log(mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E","W","W"]))

console.log(mazeRunner(maze,["N","N","N","W","W"]))
console.log(mazeRunner(maze,["N","N","N","N","N","E","E","S","S","S","S","S","S"]))

console.log(mazeRunner(maze,["N","E","E","E","E"]))