export const likes = (a : string[]) : string => {
  const l = a.length;
  if (!l || l === 1) return `${ l ? a[0] : 'no one' } likes this`;
  if (l === 2) return `${ a[0] } and ${ a[1] } like this`;
  return `${ a[0] }, ${ a[1] } and ${ l === 3 ? a[2] : `${l - 2} others` } like this`;
}