Array.prototype.filter = function (func) {
    const newArr = [];
    for (let i = 0; i < this.length ; i++){
      if (func(this[i])){
        newArr.push(this[i])
      }
    }
    return newArr
  }


  console.log([1,2,3,4].filter((num)=>{ return num > 3}), [4])