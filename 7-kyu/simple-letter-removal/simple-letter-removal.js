 
function solve(str, qty){
  let i = 0;
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  while (i < qty && str.length){
    while (!str.includes(alpha[0])){
      alpha = alpha.slice(1);
    }
    const char = alpha[0];
    str = str.replace(char, '');
    i++;
  }
  return str;
}