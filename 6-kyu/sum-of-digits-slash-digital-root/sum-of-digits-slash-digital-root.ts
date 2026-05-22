export const digitalRoot = (n:number):number => {
  while (String(n).length > 1) n = n.toString().split('').reduce((a,el) => a += + el, 0);
  return n;
};