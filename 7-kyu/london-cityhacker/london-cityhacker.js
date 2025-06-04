 
function londonCityHacker(journey) {
  let total = 0;
  let wasBus = false;
  for (const trip of journey){
    if (typeof trip === 'string'){
      total += 24;
      wasBus = false;
    }else{
      if (wasBus){
        wasBus = false;
      }else{
        wasBus = true;
        total += 15
      }
    }
  }
  return "£" + (total / 10).toFixed(2);
}