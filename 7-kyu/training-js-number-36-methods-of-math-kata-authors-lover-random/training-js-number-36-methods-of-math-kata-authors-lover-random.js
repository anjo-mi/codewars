 
const randoTo = (n) => Math.floor(Math.random() * n);
​
function rndCode(){
  let code = '';
  const letters = 'ABCDEFGHIJKLM';
  const symbols = '~!@#$%^&*';
  for (let i = 0 ; i < 8 ; i++){
    if (i < 2) code += letters[randoTo(13)];
    else if (i < 6) code += randoTo(10);
    else code += symbols[randoTo(9)];
  }
  return code;
}