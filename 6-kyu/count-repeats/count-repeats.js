function countRepeats(str) {
  let current = null;
  let count = 0;
  for (const char of str){
    if (current !== char){
      current = char;
      continue;
    }
    else{count++}
  }
  return count;
}