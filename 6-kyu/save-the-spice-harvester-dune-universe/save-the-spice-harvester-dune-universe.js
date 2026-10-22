 
function harvesterRescue(data){
  const [hx,hy] = data.harvester;
  const [wx,wy] = data.worm[0];
  const wspeed  = data.worm[1];
  const [cx,cy] = data.carryall[0];
  const cspeed  = data.carryall[1];
  const wdist = Math.sqrt((hx - wx)**2 + (hy-wy)**2);
  const cdist = Math.sqrt((hx - cx)**2 + (hy-cy)**2);
  const wtime = wdist / wspeed;
  const ctime = cdist / cspeed;
  return ctime + 1 < wtime 
          ? `The spice must flow! Rescue the harvester!`
          : `Damn the spice! I'll rescue the miners!`;
}