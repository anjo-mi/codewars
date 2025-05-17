 
function workNeeded(min,lancers){
  const totalLanced = lancers.reduce((a,el) => a += ( (el[0] * 60) + el[1] ) ,0);
  if (min <= totalLanced) return `Easy Money!`;
  min -= totalLanced;
  const hours = Math.floor(min / 60);
  const mins = min % 60;
  return `I need to work ${hours} hour(s) and ${mins} minute(s)`;
}