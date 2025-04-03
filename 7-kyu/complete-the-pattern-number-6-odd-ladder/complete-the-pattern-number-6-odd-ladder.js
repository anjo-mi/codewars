 
function pattern(n){
  if (n <= 0) return '';
  const lines = [];
  for (let i = 1 ; i <= n ; i+=2){
    lines.push(i.toString().repeat(i));
  }
  return lines.join('\n');
}