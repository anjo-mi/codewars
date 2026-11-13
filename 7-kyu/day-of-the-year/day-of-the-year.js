 
const daysPerMonth = {
  1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31,
}
​
const isLeap = yr => !(yr % 400) || (!(yr % 4) && (yr % 100));
​
function toDayOfYear(arr) {
  const [d,m,y] = arr;
  let days = m > 2 && isLeap(y) ? 1 : 0;
  for (let i = 1 ; i < m ; i++) days += daysPerMonth[i];
  return days + d;
}