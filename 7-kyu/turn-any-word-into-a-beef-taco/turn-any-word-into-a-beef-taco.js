 
function tacofy(word) {
  const vowels = new Set('aeiou');
  const conv = {
    t: 'tomato', l: 'lettuce', c: 'cheese', g: 'guacamole', s:'salsa'
  };
  const ingreds = ['shell'];
  for (const char of word.toLowerCase()){
    if (vowels.has(char)) ingreds.push('beef');
    else if (char in conv) ingreds.push(conv[char]);
  }
  ingreds.push('shell');
  return ingreds;
}