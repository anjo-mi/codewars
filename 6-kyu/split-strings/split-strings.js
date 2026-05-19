 
function solution(str){
  const res = [];
  for (let i = 0 ; i < str.length ; i += 2){
    let portion = str.slice(i,i+2);
    if (portion.length === 1) portion += '_';
    res.push(portion)
  }
  return res;
}