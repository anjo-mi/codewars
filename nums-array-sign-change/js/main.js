function catchSignChange(arr) {
    if (arr.length === 0) return 0;
    let alt = 0;
    for (let i = 1 ; i < arr.length ; i++){
      console.log(Math.sign(arr[i]), Math.sign(arr[i -1]))
      if (Math.sign(arr[i]) !== Math.sign(arr[i - 1])){
        alt++;
      }
    }
    return alt;
  }

  const tests = [
    [[], 0],
    [[1,3,4,5], 0],
    [[-1,-3,-4,-5], 0],
    [[1,-3,-4,0,5], 2],
    [[-47,84,-30,-11,-5,74,77], 3],
  ];

  for (let [input, expected] of tests) {
      console.log(catchSignChange(input), expected);
  }