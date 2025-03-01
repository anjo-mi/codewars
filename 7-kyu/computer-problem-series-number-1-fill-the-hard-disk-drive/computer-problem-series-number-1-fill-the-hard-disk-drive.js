 
function save(sizes, hd) {
  let i = 0;
  let total = 0;
  while (total <= hd && sizes[i]){
    total += sizes[i]
    i++
  }
  return total > hd 
          ? i-1 
          : sizes.length;
}