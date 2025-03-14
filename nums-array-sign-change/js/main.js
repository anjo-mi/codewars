// Count how often sign changes in array.

// result
// number from 0 to ... . Empty array returns 0

// example
// const arr = [1, -3, -4, 0, 5];

/*
| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |
*/

// catchSignChange(arr) == 2;

const catchSignChange = function(arr){
    var count=0;
    for (i=0; i<arr.length; i++){
      if ((arr[i]<0 && arr[i+1]>=0) || (arr[i]>=0 && arr[i+1]<0)){
      count++;
      }
    };
    return count;
  };

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