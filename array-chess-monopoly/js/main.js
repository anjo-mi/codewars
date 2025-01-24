function game(n) {
    const arr = [];
    for (let i = 1 ; i <= n ; i++){
      let line = [];
      for (let j = 1 ; j <= n ; j++){
        line.push([j, i + j])
      }
      arr.push(line)
    }
    console.log(arr)
  }