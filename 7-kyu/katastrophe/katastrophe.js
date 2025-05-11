 
function strongEnough(quake, age) {
  const richter = quake.map(el => el.reduce((a,e) => a+e, 0)).reduce((a,e) => a * e, 1);
  let buildingStrength = 1000;
  while (age){
    buildingStrength *= (99/100);
    age--;
  }
  return buildingStrength >= richter ? 'Safe!' : 'Needs Reinforcement!'
}