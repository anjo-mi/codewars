 
const isUpper = (st) => st === st.toUpperCase();
const isLower = (st) => st === st.toLowerCase();
​
function typist(s){
  let count = 0;
  let prev = 'a';
  
  for (const char of s){
    count++;
    if (isUpper(prev) && !isUpper(char)) count++;
    if (isLower(prev) && !isLower(char)) count++;
    prev = char;
  }
  return count;
}
​