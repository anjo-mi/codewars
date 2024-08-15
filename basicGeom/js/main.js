function distanceBetweenPoints(a, b) {
    let xDist = a.x - b.x
    let yDist = a.y - b.y
    return Math.sqrt(xDist ** 2 + yDist ** 2)
  }