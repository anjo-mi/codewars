 
function validateTime(time) {
  if(!time) return false;
  const [hours,mins] = time.split(':');
  if (hours.length > 2 || 
      mins.length !== 2 || 
      +hours > 23 || 
      +mins  > 59) return false;
  return true;
}