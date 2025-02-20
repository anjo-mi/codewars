function timeConvert(num) { 
  if (num <= 0) return '00:00';
  let hours = Math.floor(num / 60).toString();
  let mins = (num % 60).toString();
  return `${hours.length < 2 ? '0' + hours : hours}:${mins.length < 2 ? '0' + mins : mins}`
}