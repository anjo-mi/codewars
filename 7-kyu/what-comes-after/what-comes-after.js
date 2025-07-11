 
function comes_after(str,l) {
  const alpha = new Set('abcdefghijklmnopqrstuvwxyz');
  let postfixes = '';
  for (let i = 0 ; i < str.length - 1 ; i++){
    if ( str[i].toLowerCase() === l.toLowerCase() && 
         alpha.has( str[i+1].toLowerCase() ) ) postfixes += str[i+1]
  }
  return postfixes;
}