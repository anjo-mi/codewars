function highestRank(arr){
    let obj = {}
    for (let i = 0 ; i < arr.length ; i++){
      if (!obj[arr[i]]){
        obj[arr[i]] = 1
      }else{
        obj[arr[i]]++
      }
    }
    let a = []
    for (let key in obj){
      a.push([+key, obj[key]])
    }
    a.sort((a,b) => b[1] - a[1])
    a = a.filter(el => el[1] === a[0][1])
    a.sort((a,b) => b[0] - a[0])
    return a[0][0]
  }