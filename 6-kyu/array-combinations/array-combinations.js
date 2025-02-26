 
function solve(arr) {
  const uniqueCounts = arr.map(subArr => new Set(subArr).size)
  return uniqueCounts.reduce((a,el) => a*el, 1)
};