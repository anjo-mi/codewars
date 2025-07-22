 
function i(word) {
  const countVowelsAndCons = w => {
    const vowels = new Set('aeiou');
    const cons   = new Set('bcdfghjklmnpqrstvwxyz');
    let vTotal = 0;
    let cTotal = 0;
    for (const char of w){
      if (vowels.has(char.toLowerCase())) vTotal++;
      if (cons.has(char.toLowerCase()))   cTotal++;
    }
    return {vTotal , cTotal};
  }
  const {vTotal,cTotal} = countVowelsAndCons(word);
  console.log({vTotal,cTotal})
  return  vTotal < cTotal &&
          word[0].toLowerCase() !== word[0] && 
          word[0] !== 'I' 
                            ? 'i' + word[0].toUpperCase() + word.slice(1) : 'Invalid word';
}