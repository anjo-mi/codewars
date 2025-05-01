 
function tArea(tStr) {
  const lines = tStr.trim().split('\n');
  return (lines.length-1)**2 / 2;
}