function high(x){
  let obj = {}
  let arr = []
  x = x.split(' ')
  x.forEach(el => {
    obj[el] = el.split('').reduce((a, el) => {
        return a + el.charCodeAt(0) - 96
        },0)
    })
    for (let key in obj){
        arr.push([key, obj[key]])
    }
    arr.sort((a,b) => b[1] - a[1])
    return arr[0][0]
}

console.log(high('man i need a taxi up to ubud'))
console.log(high('what time are we climbing up the volcano'))