 
function isLucky(tix) {
  const nums = new Set('0123456789')
  if ( tix.length !== 6 || !( tix.split('').every(el => nums.has(el))) ) return false;
  const front = tix.split('').slice(0,3).reduce((a,el) => a + +el, 0);
  const end   = tix.split('').slice(3,6).reduce((a,el) => a + +el, 0);
  return front === end;
}