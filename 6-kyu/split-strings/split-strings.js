 
function solution(str, step = 2){
  const res = [];
  for (let i = 0 ; i < str.length ; i += step){
    let portion = str.slice(i,i+step);
    while (portion.length < step) portion += '_';
    res.push(portion)
  }
  return res;
}