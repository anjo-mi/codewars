 
function remove(str, what) {
  for (const char in what){
    while (what[char]){
      str = str.replace(char, '');
      what[char]--;
    }
  }
  return str;
}
​