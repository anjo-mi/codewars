 
const xor = (a, b) => a === b ? "0" : "1";
​
​
function mystery(num) {
  let binary = (+num).toString(2).split("");
  let n = (+num).toString(2).length;
  let gray = [];
  for (let i = 0; i < n; i++) {
    if(i===0){
      gray[0] = binary[0];
    }
    if(i<(n-1)){
      gray[i+1] = xor(binary[i], binary[i+1]);      
    }
  }
  let value = parseInt(gray.join(""), 2);
  return value;
}
​
​
function mysteryInv(num) {
  let gray = (+num).toString(2).split("");
  let n = (+num).toString(2).length;
  let binary = [];
  for (let i = 0; i < n; i++) {
    if(i===0){
      binary[0] = gray[0];
    }
    if(i<(n-1)){
      binary[i+1] = xor(binary[i], gray[i+1]);      
    }
  }
  let value = parseInt(binary.join(""), 2);
  return value;
}
​
function nameOfMystery(){
  return "Gray code";
}