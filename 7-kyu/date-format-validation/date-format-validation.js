 
function dateChecker(da){
  const arab = new Set('0123456789');
  const [date, time] = da.split(' ');
  if (!date || !time) return false;
  
  const [m,d,y] = date.split('-');
  const [hrs,min] = time.split(':');
  if (!m || !d || !y) return false;
  if (m.split('').some(el => !arab.has(el))) return false;
  if (d.split('').some(el => !arab.has(el))) return false;
  if (y.split('').some(el => !arab.has(el))) return false;
//   if (+m > 12) return false;
  if (!hrs || !min) return false;
  if (hrs.split('').some(el => !arab.has(el))) return false;
  if (min.split('').some(el => !arab.has(el))) return false;
  
  if (m.length !== 2 || d.length !== 2 || y.length !== 4) return false;
  if (hrs.length !== 2 || min.length !== 2) return false;
  
  return true;
}