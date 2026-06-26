 
function helpZoom(key){
  if (!Number.isInteger(Math.sqrt(key.length))) return 'No';
  let end = Math.ceil(key.length / 2);
  let start = key.length % 2 ? end - 2 : end - 1;
  while (start >= 0){
    if (key[start] !== key[end]) return 'No';
    start--;
    end++;
  }
  return "Yes";
}