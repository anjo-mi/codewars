 
function rot90Clock(str) {
  str = str.split('\n');
  const newArr = [];
  for (let i = 0 ; i < str.length ; i++){
    let line = '';
    for (let j = str.length - 1 ; j >= 0 ; j--){
      line += str[j][i]
    }
    newArr.push(line);
  }
  return newArr.join('\n')
}
function diag1Sym(str) {
  str = str.split('\n');
  const newArr = [];
  for (let i = 0 ; i < str.length ; i++){
    let line = '';
    for (let j = 0 ; j < str.length ; j++){
      line += str[j][i];
    }
    newArr.push(line);
  }
  return newArr.join('\n');
}
function selfieAndDiag1(str) {
  let diag = diag1Sym(str).split('\n');
  return str.split('\n').map((line, i) => line + '|' + diag[i]).join('\n');
}
function oper(fct, s) {
  return fct(s);
}