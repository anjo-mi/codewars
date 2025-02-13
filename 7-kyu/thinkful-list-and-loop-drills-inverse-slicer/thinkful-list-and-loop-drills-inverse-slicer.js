 
function inverseSlice(items, a, b) {
  items.splice(a,b - a);
  return items;
}