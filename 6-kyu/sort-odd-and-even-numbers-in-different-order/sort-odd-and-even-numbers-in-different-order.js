 
function sortArray(arr) {
  const sortedOdds  = arr.filter(el =>   el % 2 ).sort((a,b) => b-a);
  const sortedEvens = arr.filter(el => !(el % 2)).sort((a,b) => a-b);
  
  return arr.map(el => el % 2 ? sortedOdds.pop() : sortedEvens.pop());
}