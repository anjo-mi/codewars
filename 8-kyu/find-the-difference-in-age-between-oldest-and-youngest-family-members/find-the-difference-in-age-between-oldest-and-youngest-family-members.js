 
function differenceInAges(ages){
  const oldAss = Math.max(...ages);
  const youngin = Math.min(...ages);
  return [youngin, oldAss, oldAss - youngin]
}
​