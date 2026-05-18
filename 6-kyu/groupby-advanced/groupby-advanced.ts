 
export function groupBy<T,K,A>(
  array: T[],
  classifier: (e:T) => K,
  downstream: (acc:A, e:T) => A,
  accumulatorSupplier: () => A,
): Map<K,A> {
  const map = new Map<K,A>();
  for (const emp of array){
    const pro = classifier(emp);
    if (!map.has(pro)) map.set(pro, accumulatorSupplier());
    const acc = map.get(pro) as A;
    const res = downstream(acc,emp);
    map.set(pro,res);
  }
  return map;
}
​