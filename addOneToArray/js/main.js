const upArray = arr => {
    let startLength = arr.length
    if (arr.some(el => el < 0 || el > 9) || arr.length === 0 || arr[0] === undefined){
      return null
    }
    for (let i = arr.length - 1 ; i >= 0 ; i--){
        arr[i]++
        if (arr[i] !== 10){
            return arr
        }
        if (arr[i] === 10){
            arr[i] = 0
        }
        if (i === 0 && arr[i] === 0){
            arr.unshift(1)
        }
    }
    return arr
  }


console.log(upArray([4,3,2,5]))
console.log(upArray([2,3,9,9]))
console.log(upArray(    [9,9]))
console.log(upArray(    [0,7]))
console.log(upArray([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]))