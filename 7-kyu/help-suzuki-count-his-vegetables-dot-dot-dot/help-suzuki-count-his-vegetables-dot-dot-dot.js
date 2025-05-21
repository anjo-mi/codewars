 
function countVegetables(str){
  const valid = ["cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"];
  const validated = new Set(valid);
  const counts = {};
  for (const word of str.split(' ')){
    if (validated.has(word)){
      counts[word] = (counts[word] || 0) + 1;
    }
  }
  const result = valid.map(veg => [counts[veg], veg]).filter(el => el[0]).sort((a,b) =>{
    return b[0] - a[0] ? b[0] - a[0] : b[1].localeCompare(a[1]);
  });
  return result;
}
​