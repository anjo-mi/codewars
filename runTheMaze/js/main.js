function mazeRunner(maze, directions) {
    let first = -1
    let second = -1
  
    for (let i = 0 ; i < maze.length ; i++){
      if (maze[i].includes(2)){
          first = i
          second = maze[i].indexOf(2)
      }
    }
    console.log(first)
    console.log(second)
    console.log(maze[first][second])
    let placeOnBoard = []
    for (let i = 0 ; i < directions.length ; i++){
      if (directions[i] === 'N') {first--}
      if (directions[i] === 'S') {first++}
      if (directions[i] === 'E') {second++}
      if (directions[i] === 'W') {second--}
      console.log(first,second)
      placeOnBoard.push(maze[first][second])
    }
    console.log(placeOnBoard)
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