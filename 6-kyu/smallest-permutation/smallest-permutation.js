 
function minPermutation(n) {
  let pos = true;
  if (n < 0) pos = false;
  n = n.toString().split('');
  if (!pos) n = n.slice(1);
  const zeros = n.filter(el => el ==='0');
  const nonzeros = n.filter(el => el !== '0');
  nonzeros.sort();
  for (const z of zeros){
    nonzeros.splice(1,0,z);
  }
  return pos ? +nonzeros.join('') : -nonzeros.join('');
}