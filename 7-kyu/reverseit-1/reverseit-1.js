 
function reverseIt(data){
  let num = false;
  if (typeof data === 'number'){
    data = data.toString();
    num = true;
  }
  if (typeof data !== 'string') return data;
  data = data.split('').reverse().join('');
  return num ? +data : data;
 }
​