 
export function gracefulTipping(bill: number): number {
  bill *= 1.15;
  const dollars = Math.floor(bill);
  const pow = dollars.toString().length - 1;
  const remains = dollars % Math.pow(10,pow);
  const tipInc = (5 * Math.pow(10,pow - 1) < 1 ? 1 : 5 * Math.pow(10,pow - 1));
  let total = dollars - remains;
  return remains <= tipInc ? total + tipInc : total + (tipInc * 2);
}
​