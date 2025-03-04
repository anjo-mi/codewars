 
var number = function(busStops){
  const totals = busStops.reduce((a,el) =>{
    a[0] = (a[0] || 0) + el[0];
    a[1] = (a[1] || 0) + el[1];
    return a;
  }, [])
  return totals[0] - totals[1];
}