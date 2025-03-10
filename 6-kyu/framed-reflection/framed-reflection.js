 
function mirror(text){
  let words = text.split(' ').map(el => '* ' + el.split('').reverse().join(''));
  const maxLength = words.slice(0).sort((a,b) => b.length - a.length)[0].length;
  words = words.map(el => el + ' '.repeat(maxLength + 1 - el.length) + '*')
  return '*'.repeat(maxLength + 2) + '\n' +
         words.join('\n') + '\n' + 
         '*'.repeat(maxLength + 2);
}