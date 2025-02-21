 
var numberFormat = function (num) {
  const isNeg = num < 0;
  if (isNeg) num *= -1;
  let groupsOfThree = [];
  num = num.toString().split('');
  while (num.length){
    groupsOfThree.unshift(num.splice(-3).join(''));
  }
  groupsOfThree = groupsOfThree.join(',');
  return isNeg ? '-' + groupsOfThree : groupsOfThree;
};
​