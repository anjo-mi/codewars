 
var whatTimeIsIt = function(angle) {
  if (angle === 360) angle = 0;
  let totalMinutes = angle * 2;
  let hours = (Math.floor(totalMinutes / 60) || 12).toString().padStart(2,'0');
  let minutes = Math.floor(totalMinutes % 60).toString().padStart(2,'0');
  return `${hours}:${minutes}`;
}