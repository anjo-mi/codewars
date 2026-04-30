 
export function isMatch(w1:string,w2:string):boolean {
  if (w1.length !== w2.length) return false;
  for (let i = 0 ; i < w1.length ; i++){
    const c1:string = w1[i];
    const c2:string = w2[i];
    if (c1 !== c2 && c1 !== '*') return false;
  }
  return true;
}
​
export function translate(speech: string, vocabulary: string[]): string {
  const words = speech.split(' ');
  const translation = [];
  const validEnds = new Set('?.,!');
  for (let word of words){
    if (!word.includes('*')){
      translation.push(word);
      continue;
    }
    let end = '';
    if (validEnds.has(word[word.length - 1])){
      end = word[word.length - 1];
      word = word.slice(0,-1);
    }
    for (const w of vocabulary){
      if (isMatch(word,w)){
        translation.push(w + end);
        continue;
      }
    }
  }
  return translation.join(' ');
}  