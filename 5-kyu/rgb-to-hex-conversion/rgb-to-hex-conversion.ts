export const convertToHex = (val:number):string => {
  if (val > 255) val = 255;
  if (val < 0) val = 0;
  let hexVal = val.toString(16);
  if (hexVal.length === 1) hexVal = "0" + hexVal;
  return hexVal.toUpperCase();
};
​
​
export const rgb = (r:number, g:number, b:number): string => {
  let result = "";
  [r, g, b].forEach((num) => (result += convertToHex(num)));
  return result;
};