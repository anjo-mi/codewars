 
function onesCounter(input) {
  const streaks = [];
  let streak = 0;
  let prev = null;
  for (const num of input){
    if (num === 1 && prev === 1) streak++;
    else if(prev === 1 && num !== 1) {
      streaks.push(streak);
      streak = 0;
    }else if(num === 1) streak++;
    prev = num;
  }
  if (streak) streaks.push(streak);
  return streaks;
}