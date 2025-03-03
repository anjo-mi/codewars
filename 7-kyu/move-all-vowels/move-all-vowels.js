function moveVowel(input) {
  const alpha = 'aeiou';
  const consonants = input.split('').filter(char => !alpha.includes(char));
  const vowels = input.split('').filter(char => alpha.includes(char));
  return consonants.concat(vowels).join('');
}