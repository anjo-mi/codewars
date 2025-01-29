// You are given a string of n lines, each substring being n characters long: For example:

// s = "abcd\nefgh\nijkl\nmnop"

// We will study some transformations of this square of strings.

// rot(s):
// Clock rotation 180 degrees.
// rot(s) => "ponm\nlkji\nhgfe\ndcba"
// selfie_and_rot(s) (or selfieAndRot or selfie-and-rot):
// It is an initial string combined with its 180-degree clock-rotated version, interspersed with dots proportional to the length of the segments, to better illustrate the rotation when printed.
// s = "abcd\nefgh\nijkl\nmnop" --> 
// "abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"
// On printing, these functions work as follows:

// |rot             |selfie_and_rot
// |abcd --> ponm   |abcd --> abcd....
// |efgh     lkji   |efgh     efgh....
// |ijkl     hgfe   |ijkl     ijkl....   
// |mnop     dcba   |mnop     mnop....
//                            ....ponm
//                            ....lkji
//                            ....hgfe
//                            ....dcba
// Notice that the number of dots is the common length of "abcd", "efgh", "ijkl", "mnop".

// Task:
// Write these two functions rot and selfie_and_rot
// and

// high-order function oper(fct, s) where

// fct is the function of one variable f to apply to the string s (fct will be one of rot, selfie_and_rot)

// Examples:
// s = "abcd\nefgh\nijkl\nmnop"
// oper(rot, s) => "ponm\nlkji\nhgfe\ndcba"
// oper(selfie_and_rot, s) => "abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"
// Notes:
// The form of the parameter fct in oper changes according to the language. You can see each form according to the language in "Your test cases".
// It could be easier to take these katas from number (I) to number (IV)
// Forthcoming katas will study other tranformations.

// Bash Note:
// The input strings are separated by , instead of \n. The ouput strings should be separated by \r instead of \n. See "Sample Tests".


function rot(str) {
    str = str.split('\n');
    const reverseArray = [];
    for (let i = str.length - 1 ; i >= 0 ; i--){
      reverseArray.push(str[i].split('').reverse().join(''));
    }
    return reverseArray.join('\n');
  }
  function selfieAndRot(str) {
    str = str.split('\n').map(el => el + '.'.repeat(el.length));
    const rotation = rot(str.join('\n'));
    str = str.concat(rotation)
    return str.join('\n')
  }
  function oper(fct, s) {
    return fct(s)
  }


  function testIt(func, input, expected, funcName) {
    it(`Function: ${funcName}\nInput string: ${JSON.stringify(input)}\nExpected: ${JSON.stringify(expected)} `, function() {
        console.log(oper(func, input), expected);
    });
}

    testIt(rot, "fijuoo\nCqYVct\nDrPmMJ\nerfpBA\nkWjFUG\nCVUfyL", "LyfUVC\nGUFjWk\nABpfre\nJMmPrD\ntcVYqC\nooujif", 'rot');
    testIt(rot, "rkKv\ncofM\nzXkh\nflCB", "BClf\nhkXz\nMfoc\nvKkr", 'rot');

    testIt(selfieAndRot, "xZBV\njsbS\nJcpN\nfVnP", "xZBV....\njsbS....\nJcpN....\nfVnP....\n....PnVf\n....NpcJ\n....Sbsj\n....VBZx", 'selfieAndRot');
    testIt(selfieAndRot, "uLcq\nJkuL\nYirX\nnwMB", "uLcq....\nJkuL....\nYirX....\nnwMB....\n....BMwn\n....XriY\n....LukJ\n....qcLu", 'selfieAndRot');