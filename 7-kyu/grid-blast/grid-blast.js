 
const bfgrid = [
  ['top left',    'top middle',    'top right'],
  ['middle left', 'center',        'middle right'],
  ['bottom left', 'bottom middle', 'bottom right']
]
​
function fire(x,y) {
  return bfgrid[y][x]
}