 
var ownedCatAndDog = function(catYears, dogYears) {
  let humanCat = 0;
  if (catYears >= 15){
    humanCat++;
    catYears -= 15;
  }
  if (humanCat && catYears >= 9){
    humanCat++;
    catYears -= 9;
  }
  if (humanCat === 2){
    while (catYears >= 4){
      humanCat++;
      catYears -= 4;
    }
  }
  let humanDog = 0;
  if (dogYears >= 15){
    humanDog++;
    dogYears -= 15;
  }
  if (humanDog && dogYears >= 9){
    humanDog++;
    dogYears -= 9;
  }
  if (humanDog === 2){
    while (dogYears >= 5){
      humanDog++;
      dogYears -= 5;
    }
  }
  return [humanCat , humanDog]
}
​