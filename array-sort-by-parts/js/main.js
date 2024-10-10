function flip(stack) {
    let slices = []
    function checkOrder(arr){
      for (let i = 0 ; i < arr.length - 2 ; i++){
        if ( arr[i] > arr[i + 1] ){
          return false
        }
        return true
      }
    }
    if (checkOrder(stack)) return slices
    let i = stack.indexOf(Math.max(...stack))
    if (i !== stack.length - 1){
      flip(stack.slice(0,i))
    }else if(i === 0){
      stack = stack.reverse()
    }else{
      slices.push(i)
      stack = stack.slice(0, i).reverse().concat(stack.slice(i+1))
    }
    return stack
    
  }