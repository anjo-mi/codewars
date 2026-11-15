 
var searchArray = function (search, query) {
  if (
      !Array.isArray(query)
   || !Array.isArray(search)
   || query.length !== 2
   || !search.every(pair => pair.length === 2)
  ) throw new Error('check your inputs');
  for (let i = 0 ; i < search.length ; i++){
    if (search[i][0] === query[0] && search[i][1] === query[1]) return i;
  }
  return -1;
}