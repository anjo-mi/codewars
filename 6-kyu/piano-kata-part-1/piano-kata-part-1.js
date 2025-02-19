function blackOrWhiteKey(count) {
  const rotatedCount = ((count - 1) % 88) + 1;
  const patternedCount = ((rotatedCount - 1) % 12);
  const order = ['white', 'black', 'white', 'white', 'black', 'white', 'black', 'white', 'white', 'black', 'white', 'black'];
  return order[patternedCount];
}
​