reverse = function(arr) {
    let arr2 = []
    for (let i = arr.length - 1; i >= 0; i--){
      arr2.push(arr[i])
    }
    return arr2
  }

  console.log( reverse([1,2,3]), [3,2,1] )
  console.log( reverse([1,null,14,"two"]), ["two",14,null,1] )