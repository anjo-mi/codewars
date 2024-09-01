function encode(str,  n){
    str = str.split('')
    for ( let i = 0 ; i < str.length ; i++ ){
      str[i] = str[i].charCodeAt(0) - 96
    }
    n = n.toString().split('').map(Number)
    for (let i = 0 ; i < str.length ; i ++){
      str[i] += n[i % n.length]
    }
    return str
  }


console.log(encode("scout",1939)) // [ 20, 12, 18, 30, 21]
console.log(encode("masterpiece",1939)) // [ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]