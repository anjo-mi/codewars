 
function reverseCase(str){
  let res = '';
  for (let i = 0 ; i < str.length ; i++){
    const char = str[i];
    let j = i + 1;
    while (str[j] === char) j++;
    if (j-i > 1) res += char === char.toLowerCase() ? str.slice(i,j).toUpperCase() : str.slice(i,j).toLowerCase();
    else res += char;
    i = j - 1;
  }
  return res;
}