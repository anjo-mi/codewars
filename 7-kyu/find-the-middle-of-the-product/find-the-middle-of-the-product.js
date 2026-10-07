 
function findMiddle(str){
  if (typeof str !== 'string') return -1;
  const nums = new Set('0123456789');
  const ns = str.split('').filter(n => nums.has(n));
  if (!ns.length) return -1;
  const prod = ns.reduce((a,el) => a *= el, 1).toString();
  if (prod.length === 1) return +prod;
  const mid = Math.floor(prod.length / 2);
  return Number( prod.length % 2 ? prod[mid] : prod[mid - 1] + prod[mid] );
}