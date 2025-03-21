 
function recycle(arr) {
  const organic = [];
  const plastic = [];
  const glass = [];
  const paper = [];
  for (const item of arr){
    if (item.material === 'organic' || item.secondMaterial === 'organic') organic.push(item.type);
    if (item.material === 'plastic' || item.secondMaterial === 'plastic') plastic.push(item.type);
    if (item.material === 'glass' || item.secondMaterial === 'glass') glass.push(item.type);
    if (item.material === 'paper' || item.secondMaterial === 'paper') paper.push(item.type);
  }
  return [paper,glass,organic,plastic];
}