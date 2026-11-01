 
function sumItUp(numbases){
  const vals = numbases.map(([str,b]) => parseInt(str,b));
  return vals.reduce((a,el) => a + el, 0);
}