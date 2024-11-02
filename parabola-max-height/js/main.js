function maxBall(v) {
    let heights = []
    function findHeight(num, v){
      let height = ( ((v / (36e-1)) * (num / 10)) - ( (981e-2 * ((num/10)**2) ) / 2)  )
      if (heights.length === 0 || height > heights[heights.length - 1]){
        heights.push(height)
        findHeight(++num,v)
      }
      return heights.length - 1
    }
    return findHeight(0, v)
  }

  console.log(maxBall(37), 10)
  console.log(maxBall(45), 13)
  console.log(maxBall(99), 28)
  console.log(maxBall(85), 24)