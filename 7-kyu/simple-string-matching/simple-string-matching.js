 
function solve(a,b){
  if (!a.includes('*')) return a === b;
  a = a.split('*');
  if (a.join('').length > b.length) return false;
  return b.startsWith(a[0]) && b.endsWith(a[a.length-1]);
}