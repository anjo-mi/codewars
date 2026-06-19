 
export function duplicated(arr: any[], keys: string[]): any[] {
  const results: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      const ob = arr[j];
      let isEqual = true;
      for (const key of keys) {
        if (ob[key] !== obj[key]) isEqual = false;
      }
      if (isEqual) {
        results.push(i);
        break;
      }
    }
  }
  return results.map(i => arr[i]);
}
// export function duplicated(arr: any[], keys: string[]): any[] {
//   console.log({arr,keys})
//   const results = new Set<string>();
//   for (let i = 0 ; i < arr.length ; i++){
//     const obj = arr[i];
//     const set = new Set<any>();
//     for (const ob of arr.filter((o,ind) => ind !== i)){
//       let isEqual = true;
//       for (const key of keys){
//         console.log({key,isEqual}, obj[key], ob[key])
//         if (ob[key] !== obj[key]) isEqual = false;
//       }
//       if (isEqual){
//         console.log({obj,ob})
//         set.add(obj);
//         set.add(ob);
//       }