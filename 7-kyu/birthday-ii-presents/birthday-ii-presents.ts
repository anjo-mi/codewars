 
export const conversions:Record<string , (x:string,y:number) => string> = {
  "goodpresent" : (x, y) => x.split('').map(char => String.fromCharCode(char.charCodeAt(0) + y)).join(''),
  "crap" : (x,y) => "acpr",
  "empty" : (x,y) => "empty",
  "badpresent" : (x,y) => 'Take this back!',
  "dog" : (x, y) => `pass out from excitement ${y} times`,
  "bang" : (x, y) => x.split('').reduce((a,char) => {
    return a += char.charCodeAt(0) - y;
  },0).toString(),
}
​
export function present(x: string, y: number): string{
  if (!x) return '';
  console.log({x,y})
  return conversions[x](x,y);
}