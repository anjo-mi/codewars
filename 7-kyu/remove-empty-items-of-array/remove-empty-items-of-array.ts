 
export function clean(arr: any[]): any[] {
  const indexedVals = arr.reduce((a,el,i) => {
    a[i] = el;
    return a;
  }, {})
  return Object.values(indexedVals);
}