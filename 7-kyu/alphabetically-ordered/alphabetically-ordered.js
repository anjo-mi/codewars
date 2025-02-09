 
function alphabetic(s) {
  let min = -Infinity;
  for (let char of s.toLowerCase()){
    if (char.charCodeAt(0) >= min){
      min = char.charCodeAt(0);
    }else{
      return false;
    }
  }
  return true;
}