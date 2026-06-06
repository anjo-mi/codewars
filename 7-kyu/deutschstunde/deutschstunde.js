 
function derDieDas(wort){
  const vowels = new Set('aeiouäöü');
  const count = wort.split('').reduce((a,el) => a += (vowels.has(el.toLowerCase()) ? 1 : 0), 0);
  const noun = count > 3 ? 'der' :
               count < 2 ? 'das' : 'die';
  return `${noun} ${wort}`;
}