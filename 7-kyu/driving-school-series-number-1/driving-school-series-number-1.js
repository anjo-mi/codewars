 
function passed (list) { 
  const passers = list.filter(el => el <= 18);
  return passers.length
          ? Math.round(passers.reduce((a,el) => a + el , 0) / passers.length)
          : 'No pass scores registered.'
}