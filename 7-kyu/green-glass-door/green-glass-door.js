 
const hasDubs = w => {
  let curr = w[0];
  for (let i = 1 ; i < w.length ; i++){
    if (w[i] === curr) return true;
    curr = w[i];
  }
  return false;
}
const stepThroughWith = s => hasDubs(s);