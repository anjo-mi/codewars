 
function sortByBit(arr) {
  const compareCharCodeOnes = (a,b) =>{
    const aOnes = a.toString(2).split('').reduce((acc,el) =>{
      if (el === '1') acc++;
      return acc;
    }, 0);
    const bOnes = b.toString(2).split('').reduce((acc,el) =>{
      if (el === '1') acc++;
      return acc;
    }, 0)
    if (aOnes !== bOnes) return aOnes - bOnes;
    return a-b;
  }
  return arr.sort(compareCharCodeOnes);
}