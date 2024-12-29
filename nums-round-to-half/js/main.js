function solution(n){
    const shifted = (n * 100)
    const dec = Math.abs(shifted % 100)
    const int = Math.trunc(n)
    
    let rounded
    if (dec >= 75){
      rounded = 1
    }else if(dec >= 25){
      rounded = .5
    }else{
      rounded = 0
    }
    
    return Math.sign(n) * (Math.abs(int) + rounded)
  }

console.log(solution(4.2), 4)
console.log(solution(4.4), 4.5)
console.log(solution(4.6), 4.5)
console.log(solution(4.8), 5)