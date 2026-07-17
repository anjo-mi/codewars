 
function kaCokadekaMe(word){
  const insert = 'ka';
  const vowels = new Set('aeiou');
  const res = word.split('');
  for (let i = 0 ; i < res.length ; i++){
    const char = res[i].toLowerCase();
    const next = res[i + 1]?.toLowerCase();
    if ( vowels.has(char) && next && !vowels.has(next) ){
      res.splice(i+1,0,insert);
      i++;
    }
  }
  return insert + res.join('');
}