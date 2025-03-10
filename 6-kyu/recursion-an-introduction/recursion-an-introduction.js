 
function stepDown(stair, width, step = stair){
  if (width === 0) return 0;
  if (width > stair) return [stair];
  return (stepDown(stair - width, width)).concat([stair])
}