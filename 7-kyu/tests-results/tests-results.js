function testResult(arr) {
  const a = {};
  for (let i = 0 ; i < arr.length ; i++){
    switch (true){
      case arr[i] > 8 : a['h'] = (a['h'] || 0) + 1 ; break;
      case arr[i] > 6 : a['a'] = (a['a'] || 0) + 1 ; break;
      case arr[i] > 0 : a['l'] = (a['l'] || 0) + 1 ; break;
    }
  }
  ['h', 'a', 'l'].forEach(el => { 
    if (!a.hasOwnProperty(el)) a[el] = 0;
  })
  const avg = +(arr.reduce((a,el) => a + el, 0) / arr.length).toFixed(3);
  const message = arr.every(el => el > 8) ? 'They did well' : false;
  return message ? [avg, a, message] : [avg, a]
}