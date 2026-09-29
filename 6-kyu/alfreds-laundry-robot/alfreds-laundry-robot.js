function pathFinding(path) {
  const locs = [{x:3,y:2}, {x:-4,y:3}];
  const robotLoc = {x:0,y:0};
  for (const dir of path){
    if (dir === 'e') robotLoc['x']++;
    if (dir === 'w') robotLoc['x']--;
    if (dir === 'n') robotLoc['y']++;
    if (dir === 's') robotLoc['y']--;
  }
  for (const l of locs) if (l['x'] === robotLoc['x'] && l['y'] === robotLoc['y']) return true;
  return false;
}