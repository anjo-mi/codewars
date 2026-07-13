 
function peacefulYard(yard, dist) {
  const map = new Map();
  for (let r = 0 ; r < yard.length ; r++){
    for (let c = 0 ; c < yard[r].length ; c++) if (yard[r][c] !== '-') map.set(yard[r][c],[r,c]);
  }
  const allCats = Array.from(map.entries());
  for (let i = 0 ; i < allCats.length ; i++){
    for (let j = i + 1 ; j < allCats.length ; j++){
      const [fr,fc] = allCats[i][1];
      const [sr,sc] = allCats[j][1];
      const d = Math.sqrt((fr-sr)**2 + (fc-sc)**2);
      if (d < dist) return false;
    }
  }
  return true;
}
​