function spread(func, args) {
    return func(...args)
  }


  console.log( spread(function(x,y){return x+y}, [1,2]), 3 )