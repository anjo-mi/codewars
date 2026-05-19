 
export function convertVolume(line: string): [string, number] {
  const valid = new Set('0123456789./ ');
  const arab = new Set('0123456789');
  let i = 0;
  let amount: string = '';
  let measure: string = '';
  while (!arab.has(line[i])) i++;
  while (valid.has(line[i])) {
    amount += line[i];
    i++;
  }
  while (line[i] !== ' ' && i < line.length){
    measure += line[i];
    i++;
  }
  const ingredient:string = line.split(amount + measure)[0].trim() || line.split(amount + measure)[1].trim();
  while (measure.endsWith('.')) measure = measure.slice(0,-1);
  let [num, fraction] = amount.trim().split(' ');
  let fract: number = 0;
  if (fraction) fract = +(fraction.split('/')[0]) / +(fraction.split('/')[1]);
  const numericAmount = fraction ? +num + fract : +num;
  const converter = measure.length > 1 ? measure.toLowerCase() : measure;
  const convertedAmount:number = convert[converter] * numericAmount;
  return [ingredient, convertedAmount];
}