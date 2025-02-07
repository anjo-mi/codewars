 
function sortVowels(s) {
  if (typeof s !== 'string') return '';
  const vowels = 'aeiou';
  return s.split('').map(char => vowels.includes(char.toLowerCase()) ? '|' + char : char + '|').join('\n')
}