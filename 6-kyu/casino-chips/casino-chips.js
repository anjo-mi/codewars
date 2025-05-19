 
function solve(arr){
  arr.sort((a,b) => a-b);
  const total = arr[0] + arr[1] + arr[2];
  return Math.min(Math.floor(total / 2), arr[0] + arr[1]);
//   if (Math.min(...arr) > 10000) return `you have gambling problem, get help`
//   let count = 0;
//   while ( arr.reduce((a,el) => el === 0 ? a + 1 : a, 0) < 2 ){
//     if (arr[0]){
//       if (arr[0] + arr[1] <= arr[2]){
//         arr[0]--;
//         arr[2]--;
//       }else{
//         arr[0]--;
//         arr[1]--;
//       }
//     }else{
//       arr[1]--;
//       arr[2]--;
//     }
//     count++;
//   }
//   return count;
}
​