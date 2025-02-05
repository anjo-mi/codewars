var paintLetterboxes = function(start, end) {
  const obj = {'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0};
  for (let i = start ; i <= end ; i++){
    let digits = i.toString().split('').map(Number);
    digits.forEach(el => obj[el] += 1)
  }
  const arr = [];
  for (let key in obj){
    arr.push(obj[key]);
  }
  return arr;
}
​