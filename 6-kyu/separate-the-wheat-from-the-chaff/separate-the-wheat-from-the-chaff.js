 
function wheatFromChaff(values) {
  let i = 0,
      j = values.length - 1;
  while (i < j){
    while (values[j] > 0 && j > i) j--;
    while (values[i] < 0 && j > i) i++;
    if (i < j){
      [ values[i] , values[j] ] = [ values[j] , values[i] ];
      i++;
      j--;
    }
  }
  return values;
}