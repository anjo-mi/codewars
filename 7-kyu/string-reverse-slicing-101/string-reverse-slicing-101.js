 
function reverseSlice(str) {
  const arr = [];
  while(str.length){
    const rev = str.split('').reverse().join('');
    arr.push(rev);
    str = str.slice(0, str.length - 1);
  }
  return arr;
}