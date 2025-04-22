 
function cost (mins) {
  let total = 0;
  if (mins <= 65) return 30;
  mins -= 65;
  if (mins > 0) total += (Math.ceil(mins / 30) * 10) + 30;
  return total;
} 
  