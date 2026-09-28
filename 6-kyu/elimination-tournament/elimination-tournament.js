const getResults = (arr) => {
  const last = arr.length % 2 ? arr.slice(-1)[0] : null;
  const res = last === null ? [] : [last];
  for (let i = 0 ; i < arr.length - 1 ; i+= 2){
    const curr = arr[i];
    const next = arr[i+1];
    res.push(Math.max(curr,next));
  }
  return res;
}
​
const tourney = arr => {
  const res = [arr];
  let copy = arr.slice(0);
  while (copy.length > 1){
    copy = getResults(copy);
    res.push(copy);
  }
  return res;
}