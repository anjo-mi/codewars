 
function sort(data, sortRithm) {
  const indices = data.map((_, i) => i);
  indices.sort((a, b) => sortRithm[a] - sortRithm[b]);
  return indices.map(i => data[i]);
}
​
// [ 'j', 'j', 'v', -84, 'r', 100, -55, 'z', 'p', -2, 56 ] 
// [ 'j', 'v', -84, 'j', 'r', 100, -55, 'z', 'p', -2, 56 ]