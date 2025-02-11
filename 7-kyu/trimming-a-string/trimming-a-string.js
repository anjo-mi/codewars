 
function trim(str, size) {
  return size < 3 ? str.slice(0,size) + '...' :
         size > str.length ? str : str.slice(0, size - 3) + '...';
}