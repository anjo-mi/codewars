 
function uncollapse(digits){
  const arabic = ['one','two','three','four','five','six','seven','eight','nine','zero'];
  for (const num of arabic){
    digits = digits.replaceAll(num, num + ' ');
  }
  return digits.trim();
}