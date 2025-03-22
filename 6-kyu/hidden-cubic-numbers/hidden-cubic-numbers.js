function isSumOfCubes(s){
  const arabic = '0123456789'
  let extNum = '';
  const extractedNums = [];
  for (let i = 0 ; i < s.length ; i++){
    if (arabic.includes(s[i])) extNum += s[i];
    if (extNum.length === 3 ||
       (extNum.length && (!arabic.includes(s[i]) || i === s.length - 1)) ){
      extractedNums.push(extNum);
      extNum = '';
    }
  }
  const checkCube = (numAsStr) => {
    const cubeSum = numAsStr.split('').reduce((sum,dig) => sum + ((+dig) ** 3), 0);
    return cubeSum === +numAsStr;
  };
  const filteredExt = extractedNums.filter(checkCube);
  if (!filteredExt.length) return 'Unlucky';
  
  const filteredSum = filteredExt.reduce((sum,num) => sum + +num, 0);
  return `${filteredExt.map(Number).join(' ')} ${filteredSum} Lucky`;
}