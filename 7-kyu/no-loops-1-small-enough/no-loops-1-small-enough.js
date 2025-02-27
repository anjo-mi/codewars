 
function smallEnough(a, limit){
  return a.length === a.filter(el => el <= limit).length
}