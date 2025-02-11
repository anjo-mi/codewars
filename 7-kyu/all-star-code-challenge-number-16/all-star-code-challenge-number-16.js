 
function noRepeat(str) {  
  let totals = str.split('').reduce((a,el) => {
    a[el] = (a[`${!isNaN(el) ? 'd' + el : el}`] || 0) + 1;
    return a
  }, {})
  for (let key in totals){
    if (totals[key] === 1){
      return key.length === 1 ? key : key[1];
    }
  }
}