Array.prototype.numberOfOccurrences = function(val){
    let obj = this.reduce((a,el) => {
      a[el] = (a[el] || 0) + 1
      return a
    }, {})
    return obj[val] ? obj[val] : 0
    
  }


var arr = [0, 1, 2, 2, 3];
console.log(arr.slice().numberOfOccurrences(0), 1, `Incorrect answer for 0, arr = [0, 1, 2, 2, 3]`);
console.log(arr.slice().numberOfOccurrences(4), 0, `Incorrect answer for 4, arr = [0, 1, 2, 2, 3]`);
console.log(arr.slice().numberOfOccurrences(2), 2, `Incorrect answer for 2, arr = [0, 1, 2, 2, 3]`);
console.log(arr.slice().numberOfOccurrences(3), 1, `Incorrect answer for 3, arr = [0, 1, 2, 2, 3]`);