Array.prototype.sort = function () {
    let arr = []
    while (this.length > 0){
      let x = Math.min(...this)
      arr.push(x)
      let i = this.indexOf(x)
      this.splice(i,1)
      
    }
    return arr
    throw "TODO: Fix me";
  }


  console.log([9,7,2,4,5,3,6,8,1].sort(),[1,2,3,4,5,6,7,8,9]);