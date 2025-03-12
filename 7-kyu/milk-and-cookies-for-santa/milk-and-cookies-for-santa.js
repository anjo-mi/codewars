 
function timeForMilkAndCookies(date){
  const [day,month] = [date.getDate(), date.getMonth()];
  return day === 24 && month === 11;
}