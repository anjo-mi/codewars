function riders(stations) {
  let riders = 1;
  let total = 0;
  for (let i = 0 ; i < stations.length ; i++){
    if (total + stations[i] > 100){
      total = 0;
      riders++;
    }
    total += stations[i];
  }
  return riders;
}