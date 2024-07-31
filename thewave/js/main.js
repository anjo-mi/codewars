function wave(str){
    let arr = []
    for (let i = 0 ; i < str.length ; i++){
      if (i === 0){
        arr.push(str.charAt(i).toUpperCase() + str.slice(i+1))
      }
      else{
        arr.push(str.slice(0, i) + str.charAt(i).toUpperCase() + str.slice(i+1))
      }
    }
    arr = arr.filter(el => el !== str)
    return arr
  }
  console.log(wave('hello butt'))