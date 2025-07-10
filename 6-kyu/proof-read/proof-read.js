 
const fixIsAndEs = phrase =>{
  phrase = phrase.split('');
  for (let i = 0 ; i < phrase.length - 1 ; i ++){
    if (phrase[i].toLowerCase() === 'i' && phrase[i+1].toLowerCase() === 'e'){
      [ phrase[i] , phrase[i+1] ] = [ phrase[i+1] , phrase[i] ];
      i++;
    }
  }
  return phrase.join('');
}
​
function proofread (str) { 
  str = str.split('. ').map(fixIsAndEs);
  const res = str.map(el => el[0].toUpperCase() + el.slice(1).toLowerCase()).join('. ')
  return res;
}
​