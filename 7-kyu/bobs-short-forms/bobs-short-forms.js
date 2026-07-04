 
function shortForm(str) {
  const vowels = new Set('aeiou');
  return str
          .split('')
          .filter((el,i) => !vowels.has(el.toLowerCase()) || i === 0 || i === str.length - 1 )
          .join('');
}