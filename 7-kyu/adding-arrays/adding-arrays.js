 
function arrAdder(arr) {
  let strArr = [];
  for (let i = 0 ; i < arr[0].length ; i++){
    let str = '';
    for (let j = 0 ; j < arr.length ; j++){
      if (arr[j][i]) str += arr[j][i];
    }
    strArr.push(str);
  }
  return strArr.join(' ').trim();
}