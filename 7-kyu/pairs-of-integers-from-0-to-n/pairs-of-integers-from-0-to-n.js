 
function generatePairs(n) {
  const pairs = [];
  for (let i = 0 ; i <= n; i++){
    for (let j = i ; j <= n ; j++){
      pairs.push([i,j])
    }
  }
  return pairs;
}