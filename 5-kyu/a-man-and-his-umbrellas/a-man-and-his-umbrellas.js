 
function minUmbrellas(weather) {
  const needs = new Set( ['thunderstorms', 'rainy'] );
  let brellas = {'home': 0, 'office':0};
  let offTrips = 0;
  let homeTrips = 0
  for (let i = 0; i < weather.length; i++){
    if(!needs.has(weather[i])) continue;
    if (i % 2){
      if (!brellas['office']) {
        offTrips++;
        brellas['home']++;
      }
      else if (brellas['office']){
        brellas['office']--;
        brellas['home']++;
      }
      
    }else{
      if (!brellas['home']) {
        homeTrips++;
        brellas['office']++;
      }
      else if (brellas['home']){
        brellas['home']--;
        brellas['office']++;
      }
    }
  }
  return homeTrips + offTrips;
}