 
function solve(arr) {
  return arr.reduce((a,el,i) => {
    if (i === arr.length - 1 || arr.slice(i + 1).every(num => num < el)){
      a.push(el);
    }
    return a
  } , [])
}