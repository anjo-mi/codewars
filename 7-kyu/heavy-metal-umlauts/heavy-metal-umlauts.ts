 
export const convert:Record<string,string> = {
  A : '\u00c4',
  E : '\u00cb',
  I : '\u00cf',
  O : '\u00d6',
  U : '\u00dc',
  Y : '\u0178',
  a : '\u00e4',
  e : '\u00eb',
  i : '\u00ef',
  o : '\u00f6',
  u : '\u00fc',
  y : '\u00ff'
}
​
export function heavyMetalUmlauts(boringText:string):string {
    const converted = new Set('aeiouy');
    return boringText.split('').map(char => convert[char] || char).join('');
}