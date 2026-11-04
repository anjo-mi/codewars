 
const findBrightest = (str) => {
  let max = 0;
  let s = '';
  for (let i = 1 ; i <= str.length - 2 ; i+= 2){
    const val = parseInt(str[i] + str[i+1], 16);
    if (val > max){
      max = val;
      s = str[i] + str[i+1];
    }
  }
  return max;
}
​
function brightest(colors){
  const brightness = colors.map(findBrightest);
  const max = Math.max(...brightness);
  const indexOfMax = brightness.indexOf(max);
  return colors[indexOfMax];
}