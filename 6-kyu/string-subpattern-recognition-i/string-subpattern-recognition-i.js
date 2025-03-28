 
function hasSubpattern(str){
  console.log(str)
  for (let i = 1 ; i < Math.ceil(str.length / 2) ; i++){
    let part = str.slice(0,i);
    while (part.length <= str.length){
      if (part !== str.slice(0,part.length)) break;
      if (part === str) return true;
      part += str.slice(0,i);
    }
  }
  return false;
}