 
function getDay(day, leap){
  if (leap && day === 60) return 'February, 29';
  if (leap && day > 60) day--;
  const converts = {
    'January' : 0,
    'February' : -31,
    'March' : -59,
    'April' : -90,
    'May' : -120,
    'June' : -151,
    'July' : -181,
    'August' : -212,
    'September' : -243,
    'October' : -273,
    'November' : -304,
    'December' : -334
  }
  let month = day <= 31  ? 'January' :
              day <= 59  ? 'February' :
              day <= 90  ? 'March' :
              day <= 120 ? 'April' :
              day <= 151 ? 'May' :
              day <= 181 ? 'June' :
              day <= 212 ? 'July' :
              day <= 243 ? 'August' :
              day <= 273 ? 'September' :
              day <= 304 ? 'October' :
              day <= 334 ? 'November' :
              day <= 365 ? 'December' : null;
  day = day + converts[month];
  return `${month}, ${day}`
}