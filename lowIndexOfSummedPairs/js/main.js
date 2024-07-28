function sumPairs(arr, num) {
    let pairs = []
    for (let i = 0 ; i < arr.length ; i++){
        let x = arr[i]
        for (let j = i+1 ; j < arr.length ; j++){
            if (x + arr[j] === num){
                pairs.push([x,arr[j]])
            }
        }
    }
    console.log(pairs)
    pairs = pairs.filter(el => (arr.indexOf(el[0]) < arr.indexOf(el[1])) || el[0] === el[1])
    pairs.sort((a,b) => arr.indexOf(a[1], arr.indexOf(a[0] + 1)) - arr.indexOf(b[1], arr.indexOf(b[0] + 1)))
    return pairs.length === 0 ? undefined : pairs[0]
  }


  let arr = [1,3,5,4,6,2]

  let b = [1,2,3,4,5,6]

//   sumPairs(arr, 7)

//   sumPairs(b,7)

//   console.log(sumPairs([1, 2, 3, 4, 1, 0], 2))

//   console.log(sumPairs([4, -2, 3, 3, 4], 8))

console.log(sumPairs([10, 5, 2, 3, 7, 5], 10))