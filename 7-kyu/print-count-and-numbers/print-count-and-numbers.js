 
function countMe(data) {
  const arab = new Set('0123456789');
  let res = '',
      i = 0;
  while (i < data.length){
    const curr = data[i];
    if (!arab.has(curr)) return '';
    let j = i + 1;
    while (curr === data[j]) j++;
    res += j-i + curr;
    i = j;
  }
  return res;
}