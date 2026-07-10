 
function manipulate(num) { 
  const mid = Math.floor(num.toString().length / 2);
  const convert = num.toString().split('').fill('0',mid).map(Number);
  let res = 0;
  for (let i = convert.length - 1 ; i >= 0 ; i--){
    res += convert[i] * 10**((convert.length - 1) - i)
  }
  return res;
}