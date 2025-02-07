 
function nextItem(xs, item) {
  let foundItem = false;
  for (const x of xs) {
    if (foundItem) return x;
    if (x === item) foundItem = true;
  }
  return undefined;
}