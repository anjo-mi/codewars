 
function sillycase(s) {
  const midInd = s.length % 2 ? Math.floor(s.length / 2) + 1 : Math.floor(s.length / 2);
  return s.slice(0,midInd).toLowerCase() + s.slice(midInd).toUpperCase();
}