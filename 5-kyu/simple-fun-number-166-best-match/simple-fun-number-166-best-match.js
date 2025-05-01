 
function bestMatch(a, z) {
  if (a.length !== z.length) throw new Error('game counts not matching')
  let index = null;
  let closest = Infinity;
  let goals = 0;
  for (let i = 0 ; i < a.length ; i++){
    const zGoals = z[i];
    const diff = a[i] - zGoals;
    if (diff < closest){
      closest = diff;
      goals = zGoals;
      index = i;
    }else if(diff === closest && zGoals > goals){
      goals = zGoals;
      index = i;
    }
  }
  return index;
}