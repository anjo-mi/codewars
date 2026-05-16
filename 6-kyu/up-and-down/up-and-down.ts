 
export function arrange(str: string): string {
  let arr: string[] = str.split(" ")
   for(let i = 1; i < arr.length; i++){
     if((i % 2 && arr[i].length < arr[i - 1].length) ||
       (!(i % 2) && arr[i].length > arr[i - 1].length))
       [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]
   }
  return arr.map((w,i) => i % 2 ? w.toUpperCase() : w.toLowerCase()).join(' ');
}