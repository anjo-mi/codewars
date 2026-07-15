 
const getOdds = (str) => {
  const [a,b] = str.split(':').map(Number);
  return a / (a + b);
}
​
function mostLikely(p1,p2){
  return getOdds(p1) > getOdds(p2);
}