 
function takeUmbrella(weather, chance) {
  if (weather === 'rainy' || 
     (weather === 'cloudy' && chance * 10 > 2) || 
     (weather === 'sunny'  && chance * 10 > 5) ) return true;
  return false;
}