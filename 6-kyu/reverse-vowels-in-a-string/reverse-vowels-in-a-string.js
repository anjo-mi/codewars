 
function reverseVowels(str) {
  str = str.split('')
  const vowels = 'aieou';
  const indeces = [];
  const strVowels = str.filter((el,i) => {
    if (vowels.includes(el.toLowerCase())){
      indeces.push(i)
    }
    return vowels.includes(el.toLowerCase())
    }).reverse();
  for (let i = 0 ; i < indeces.length ; i++){
    str.splice(indeces[i],1,strVowels[i]);
  }
  return str.join('');
}