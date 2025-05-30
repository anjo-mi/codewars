 
function distancesFromAverage(arr){
  const avg = +(arr.reduce((a,el) => a + el, 0) / arr.length).toFixed(2);
  const distances = arr.map(el => +(avg - el).toFixed(2));
  return distances;
}