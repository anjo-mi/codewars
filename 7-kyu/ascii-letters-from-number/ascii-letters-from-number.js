 
function convert(n){
  const conv = [];
  for (let i = 0 ; i < n.length - 1 ; i += 2){
    conv.push(n[i] + n[i+1])
  }
  return conv.map(el => String.fromCharCode(+el)).join('');
}