function isValid(f){
    let x = true;
    if (f.includes(1) && f.includes(2)){
      x = false
    }
    if (f.includes(3) && f.includes(4)){
      x = false
    }
    if (f.includes(5) && !f.includes(6)){
      x = false
    }
    if (f.includes(6) && !f.includes(5)){
      x = false
    }
    if (!f.includes(7) && !f.includes(8)){
      x = false
    }
    return x
  }

console.log(isValid([1,3,7]),true)
console.log(isValid([7,1,2,3]),false)
console.log(isValid([1,3,5,7]),false)
console.log(isValid([1,5,6,7,3]),true)
console.log(isValid([5,6,7]),true)
console.log(isValid([5,6,7,8]),true)
console.log(isValid([6,7,8]),false)
console.log(isValid([7,8]),true)