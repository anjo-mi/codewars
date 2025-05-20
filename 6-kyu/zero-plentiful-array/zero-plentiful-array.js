 
function zeroPlentiful(arr){
  let count = 0;
  let streak = 0;
  for (const el of arr){
    if (el === 0){
      streak++;
      if (streak === 4) count++;
    }
    if (el !== 0){
      if (streak && streak < 4) return 0;
      else {streak = 0}
    }
  }
  return streak && streak < 4 ? 0 : count;
}