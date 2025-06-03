 
const changeYear = obj => {
  let [year, era] = obj.year.split(' ');
  year = era === 'BCE' ? -year : +year
  const adjustedYear = year - 1977;
  const bOrA = adjustedYear >= 0 ? 'ABY' : 'BBY';
  obj.year = `${Math.abs(adjustedYear)} ${bOrA}`;
}
​
function yavinTime(...args){
  args.forEach(changeYear)
}