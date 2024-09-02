function add(n) {
    return function addOne(num){
      return num += n
    }
  }

  
  add(1)(3)// 4