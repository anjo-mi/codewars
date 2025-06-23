 
function killcount(cnsl, jason){
  cnsl = cnsl.filter(el => el[1] < jason);
  return cnsl.map(el => el[0]);
}