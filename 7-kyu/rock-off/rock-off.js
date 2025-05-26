 
function solve(a, b) {
  const [ aScore , bScore ] = a.reduce((acc,el,i) => {
    if (el > b[i]){
      acc[0]++;
    }
    if (el < b[i]){
      acc[1]++;
    }
    return acc;
  }, [0,0])
  const result = aScore > bScore ? `Alice made "Kurt" proud!` :
                 bScore > aScore ? `Bob made "Jeff" proud!` : `that looks like a "draw"! Rock on!`;
  return `${aScore}, ${bScore}: ${result}`;
}