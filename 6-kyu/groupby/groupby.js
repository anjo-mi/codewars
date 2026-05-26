 
Array.prototype.groupBy = function groupBy(eq = (a,b) => a === b) {
  const results = [];
  let currSet = [];
  for (let i = 0; i < this.length; i++) {
    const currItem = this[i];
    if (currSet.length && eq(currItem, currSet[0])) {
      currSet.push(currItem);
      continue;
    }
    else if (currSet.length && !eq(currItem, currSet[0])) results.push(currSet);
    currSet = [currItem];
  }
  if (currSet.length) results.push(currSet);
  return results;
};
​
Object.defineProperty(Array.prototype,"groupBy",{enumerable:false});