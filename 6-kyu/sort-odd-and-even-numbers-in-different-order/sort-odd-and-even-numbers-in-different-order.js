 
function sortArray(arr) {
  const sortedOdds  = arr.filter(el =>   el % 2 ).sort((a,b) => a-b);
  const sortedEvens = arr.filter(el => !(el % 2)).sort((a,b) => b-a);
  let oddCount  = -1;
  let evenCount = -1;
  
  return arr.map((el,i) => {
    if (el % 2){
      oddCount++;
      return sortedOdds[oddCount];
    }else{
      evenCount++;
      return sortedEvens[evenCount];
    }
  });
}