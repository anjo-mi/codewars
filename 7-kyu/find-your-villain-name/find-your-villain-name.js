 
function getVillainName(bd){
  const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
  const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
  const day = bd.getDate().toString();
  return `The ${m[bd.getMonth()]} ${d[day[day.length - 1]]}`;
}