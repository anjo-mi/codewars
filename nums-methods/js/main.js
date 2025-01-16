function howManySmaller(arr,n){
    arr = arr.map(el => parseFloat(el.toFixed(2)).toExponential(2))
    
    return arr.reduce((a,el) => {
      if (el < n){
        a++
      }
      return a
    },0)
    
  }


  console.log(howManySmaller([1.234,1.235,1.228],1.24), 2);
  console.log(howManySmaller([1.1888,1.1868,1.1838],1.19), 1);
  console.log(howManySmaller([3.1288,3.1212,3.1205],3.1212), 2);