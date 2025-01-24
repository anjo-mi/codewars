function game(n) {
    const arr = [];
    for (let i = 1 ; i <= n ; i++){
      let line = [];
      for (let j = 1 ; j <= n ; j++){
        line.push([j, i + j])
      }
      arr.push(line)
    }
    const final = arr.reduce((a,el) => {
      a += el.reduce((acc, i) => {
        acc += i[0] / i[1]
        return acc
      },0)
      return a
    }, 0)
    console.log(final)
  }