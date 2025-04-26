 
function unique(arr) {
  const filtered = [];
  arr.filter(el => {
    if (!filtered.includes(el)) filtered.push(el)
  })
  return filtered;
}