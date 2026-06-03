 
function charToAscii(str){
  const alpha = new Set('abcdefghijklmnopqrstuvwxyz');
  const hash = str.split('').reduce((a,char) =>{
    if (alpha.has(char.toLowerCase())) a[char] = char.charCodeAt(0);
    return a;
  } ,{})
  return Object.keys(hash).length ? hash : null;
}