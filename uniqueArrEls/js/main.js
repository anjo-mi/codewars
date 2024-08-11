const findUniq = arr => {
    if (arr[0] === arr[1]){
      return arr.filter(el => el !== arr[0])[0]
    }
    if (arr[0] !== arr[1]){
      return arr[0] === arr[2] ? arr[1] : arr[0]
    }
  }
  