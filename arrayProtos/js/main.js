Array.prototype.square = function (){
    let arr = []
    for (let i = 0 ; i < this.length ; i++){
      arr[i] = this[i]**2
    }
    return arr
  }
  Array.prototype.cube = function (){
    let arr = []
    for (let i = 0 ; i < this.length ; i++){
      arr[i] = this[i]**3
    }
    return arr
  }
  Array.prototype.average = function (){
    return this.reduce((a,el) => a + el, 0) / this.length || NaN
  }
  Array.prototype.sum = function (){
    return this.reduce((a,el) => a + el, 0)
  }
  Array.prototype.even = function (){
    return this.filter(el => el % 2 === 0)
  }
  Array.prototype.odd = function (){
    return this.filter(el => el % 2 === 1)
  }