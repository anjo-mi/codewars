 
function posAverage(s) {
  const nums = s.split(', ');
  const n = nums.length;
  if (n < 2) return 0;
  const length = nums[0].length;
  
  
  let totalMatches = 0;
  
  for (let pos = 0; pos < length; pos++) {
    const charCount = {};
    
    for (let i = 0; i < n; i++) {
      const char = nums[i][pos];
      charCount[char] = (charCount[char] || 0) + 1;
    }
    
    for (const count in charCount) {
        totalMatches += (charCount[count] * (charCount[count] - 1)) / 2;
    }
  }  
  const totalComparisons = (n * (n - 1)) / 2;
  return (100 * totalMatches) / (totalComparisons * length);
}