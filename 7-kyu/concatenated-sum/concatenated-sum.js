 
const checkConcatenatedSum = (num,reps) => {
  if (!num) return true;
  const abs = Math.abs(num);
  const total = abs.toString().split('').reduce((a,el) => a += +el.repeat(reps), 0);
  return abs === total;
}