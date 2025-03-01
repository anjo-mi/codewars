 
function save(sizes, hd) {
  let i = 0;
  let total = 0;
  while (total <= hd && (sizes[i] || sizes[i] === 0)){
    total += sizes[i]
    i++
  }
  return total > hd 
          ? i-1 
          : sizes.length;
}