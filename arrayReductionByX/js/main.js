function beggars(values, n){
    if (n === 0) {return []}
    let obj = {}
    for (let i = 0, x = 0 ; i < values.length ; i++){
      obj[x] = (obj[x] || 0) + values[i]
      x++
      if (x === n){  x = 0  }
    }
    let amounts = Array.from(Object.values(obj))
    while (amounts.length < n){
      amounts.push(0)
    }
    return amounts
  }

  console.log(beggars([1,2,3,4,5],1),[15]);
  console.log(beggars([1,2,3,4,5],2),[9,6]);
  console.log(beggars([1,2,3,4,5],3),[5,7,3]);
  console.log(beggars([1,2,3,4,5],6),[1,2,3,4,5,0]);
  console.log(beggars([1,2,3,4,5],0),[]);