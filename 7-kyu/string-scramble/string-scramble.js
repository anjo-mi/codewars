 
function scramble(str, arr) {
  let newArr = [];
  for (let i = 0 ; i < str.length ; i++){
    newArr[arr[i]] = str[i];
  }
  return newArr.join('');
};