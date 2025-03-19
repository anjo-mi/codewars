 
function stringExpansion(s) {
  const nums = '0123456789'
  let str = '';
  let num = 1;
  for (let char of s){
    if (nums.includes(char)){
      num = +char;
    }else{
      str += char.repeat(num);
    }
  }
  return str;
}