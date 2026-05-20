 
export function wordsToHex(words: string): string[] {
  const sliced: string[] = words.split(' ')
                            .map(w => w.slice(0,3).split('')
                                 .map(char => {
                                    return char.charCodeAt(0).toString(16);
                                  }).join(''))
                            .map(code => {
                              while (code.length < 6) code += '0';
                              return '#' + code;
                            });
  return sliced;
}