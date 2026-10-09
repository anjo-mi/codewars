 
const convertFlag = (flag, char) => {
  const alpha = new Set('abcdefghijklmnopqrstuvwxyz');
  if (!alpha.has(char.toLowerCase())) return [1,char];
  if (flag) return [0,char.toUpperCase()];
  return [1,char.toLowerCase()];
}
​
function uglifyWord(s) {
  let res = '';
  let flag = 1;
  for (const char of s){
    const [nf,next] = convertFlag(flag,char);
    res += next;
    flag = nf;
  }
  return res;
}