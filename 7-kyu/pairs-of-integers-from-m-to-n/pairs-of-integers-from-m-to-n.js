 
function generatePairs(m, n) {
  const pairs = [];
  for (let i = m ; i <= n ; i++){
    for (let j = i ; j <= n ; j++){
      pairs.push([i,j])
    }
  }
  return pairs;
}