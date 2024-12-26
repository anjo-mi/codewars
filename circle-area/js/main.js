function circleArea(r) {
    if (r <= 0 || isNaN(r)) throw new Error('invalid radius')
    return +(Math.PI * r**2).toFixed(3)
  }

console.log(circleArea(1), 3.141, 0.01)
console.log(circleArea(43.2673),  5881.248, 0.01)
console.log(circleArea(68     ), 14526.724, 0.01)
console.log(() => circleArea(0), Error)
console.log(() => circleArea(-1), Error)