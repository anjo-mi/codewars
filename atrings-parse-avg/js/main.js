function mean(lst){
    const nums = lst.filter(el => !isNaN(el));
    const letters = lst.filter(el => isNaN(el)).join('');
    const avg = +(nums.reduce((a,el) => a += +el, 0) / nums.length).toFixed(1);
    return [avg, letters]
  }


  const {assert} = require("chai");

function doTest(input, expected){
    console.log(input, expected);
}

  doTest(["u", "6", "d", "1", "i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"], [3.6, "udiwstagwo"]);
  doTest(["0", "c", "7", "x", "6", "2", "3", "5", "w", "7", "0", "y", "v", "u", "h", "i", "n", "u", "0", "0"], [3.0, "cxwyvuhinu"]);
  doTest(["0", "u", "a", "y", "0", "a", "9", "q", "3", "v", "g", "7", "6", "4", "y", "d", "8", "6", "0", "d"], [4.3, "uayaqvgydd"]);
  doTest(["s", "n", "9", "l", "0", "m", "i", "z", "9", "7", "y", "4", "z", "3", "3", "k", "4", "1", "0", "k"], [4.0, "snlmizyzkk"]);
  doTest(["5", "v", "u", "k", "8", "4", "9", "b", "9", "g", "5", "z", "3", "f", "6", "u", "i", "6", "6", "t"], [6.1, "vukbgzfuit"]);
  doTest(["1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "a", "a", "d", "d", "g", "q", "u", "v", "y", "y"], [0.9, "aaddgquvyy"]);
  doTest(["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "a", "a", "d", "d", "g", "q", "u", "v", "y", "y"], [1.0, "aaddgquvyy"]);