 
const frame = (text, char) => {
  const max = Math.max(...text.map(line => line.length));
  text = text.map(line => char + ' ' + line.padEnd(max, ' ') + ' ' + char);
  const topAndBottom = char.repeat(max + 4);
  text.push(topAndBottom);
  const result = [topAndBottom].concat(text)
  return result.join('\n')
};