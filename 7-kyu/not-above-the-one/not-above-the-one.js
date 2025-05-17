 
function binaryCleaner(arr) {
  const ones = arr.filter(el => el <= 1);
  const bigs = arr.map((el,i) => el > 1 ? i : null).filter(el => el === 0 || el);
  return [ones,bigs]
}