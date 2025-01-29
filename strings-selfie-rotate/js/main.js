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