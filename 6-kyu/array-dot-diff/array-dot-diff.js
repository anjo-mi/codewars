 
const arrayDiff = (a, b) => {
  const setB = new Set(b);
  return a.filter(el => !setB.has(el));
}