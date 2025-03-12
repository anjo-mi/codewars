 
function missingWord(nums, str) {
  str = str.toLowerCase().split(' ').join('');
  const retArray = nums.sort((a,b) => a-b).map(i => str[i]);
  return retArray.includes(undefined) 
            ? 'No mission today' 
            : retArray.join('')
}