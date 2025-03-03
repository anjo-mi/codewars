function longestWord(words) {
  words = words.split(' ');
  const lengths = words.map(el => el.length)
  return words.findLast(el => el.length === Math.max(...lengths));
}