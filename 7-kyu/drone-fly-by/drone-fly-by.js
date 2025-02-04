function flyBy(lamps, drone){
  const t = drone.indexOf('T') + 1;
  const on = 'o'.repeat(t);
  return (on + lamps.slice(on.length)).slice(0,lamps.length);
}