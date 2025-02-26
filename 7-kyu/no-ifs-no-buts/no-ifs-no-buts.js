function noIfsNoButs(a, b) {
  let result = '';
  switch (true){
      case a > b : result = `${a} is greater than ${b}` ; break;
      case a < b : result = `${a} is smaller than ${b}` ; break;
      case a == b : result = `${a} is equal to ${b}` ; break;
  }
  return result;
}