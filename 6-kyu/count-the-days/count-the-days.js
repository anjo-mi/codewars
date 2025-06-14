 
function countDays(d){
  const [evY, evM, evD] = [d.getFullYear(), d.getMonth(), d.getDate()];
  const now = new Date();
  const [nowY, nowM, nowD] = [now.getFullYear(), now.getMonth(), now.getDate()];
  const day = 864e5;
  
  if (evY < nowY || 
     (evM < nowM && !(evY > nowY)) || 
     (evD < nowD && !(evY > nowY || evM > nowM) ) ) return 'The day is in the past!';
  if (evY === nowY && evM === nowM && evD === nowD) return 'Today is the day!';
  return `${Math.round((d - now) / day)} days`;
}