 
function processData(data){
  const diff = (arr) => arr[0] - arr[1];
  return data.map(diff).reduce((a,el) => a * el, 1);
}