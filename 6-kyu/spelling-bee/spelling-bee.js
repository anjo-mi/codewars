 
const dirs = [
  [1,0],
  [-1,0],
  [0,1],
  [0,-1],
];
​
const inBounds = (r,c,grid) => grid[r]?.[c];
​
const countBees = (r,c,grid,[dr,dc]) => {
  let es = 0;
  while (inBounds(r,c,grid) && grid[r][c] === 'e' && es < 2){
    r += dr;
    c += dc;
    es++;
  }
  if (es === 2) return 1;
  return 0;
}
​
howManyBees = function(hive) {
  if (!hive) return 0;
  let bees = 0;
  for (let r = 0 ; r < hive.length ; r++){
    for (let c = 0 ; c < hive[r].length ; c++){
      if (hive[r][c] === 'b'){
        for (const [dr,dc] of dirs){
          bees += countBees(r+dr,c+dc,hive,[dr,dc])
        }
      }
    }
  }
  return bees;
}