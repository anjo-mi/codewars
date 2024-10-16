function findChildren(str) {
	str = str.toUpperCase().split('').sort().join('')
  let temp = ''
  let num = 0
  let arr = []
  for (let char of str){
    if (num === 0){
      num = char.charCodeAt(0)
      temp += char
    }else if(char.charCodeAt(0) === num){
      temp += char.toLowerCase()
    }else if (char.charCodeAt(0) !== num){
      arr.push(temp)
      temp = char
      num = char.charCodeAt(0)
    }
  }
  arr.push(temp)
  return arr.join('')
  
}


console.log(findChildren("beeeEBb"), "BbbEeee");
console.log(findChildren("uwwWUueEe"), "EeeUuuWww");
console.log(findChildren("abBA"), "AaBb");
console.log(findChildren("AaaaaZazzz"), "AaaaaaZzzz");
console.log(findChildren("CbcBcbaA"), "AaBbbCcc");
console.log(findChildren("xXfuUuuF"), "FfUuuuXx")