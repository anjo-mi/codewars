const isEdge = (r,c,arr) => !arr[r]?.[c] || arr[r][c] === 'O' ? 1 : 0;
​
function landPerimeter(arr) {
  let total = 0;
  for (let r = 0 ; r < arr.length ; r++){
    for (let c = 0 ; c < arr[r].length ; c++){
      if (arr[r][c] === 'X'){
        total += isEdge(r+1,c,arr);
        total += isEdge(r-1,c,arr);
        total += isEdge(r,c+1,arr);
        total += isEdge(r,c-1,arr);
      }
    }
  }
  return `Total land perimeter: ${total}`
}