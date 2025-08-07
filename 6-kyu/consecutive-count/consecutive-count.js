 
function getConsectiveItems(items, key){
  items = typeof items === 'string' ? items : items.toString();
  key = typeof key === 'string' ? key : key.toString();
  let max = 0,
      i = 0,
      j = key.length;
  while (j < items.length){
    if (items.slice(i,j) !== key){
      i++;
      j++;
    }
    let count = 0;
    while (items.slice(i,j) === key && j <= items.length){
      i += key.length;
      j += key.length;
      count++
    }
    if (count > max) max = count;
  }
  return max;
}