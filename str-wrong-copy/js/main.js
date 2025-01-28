function broken(x){
    const bin = {
      '0': '1',
      '1': '0'
    };
    let wrongCopy = ''
    for (let i = 0 ; i < x.length ; i++){
      wrongCopy += bin[x[i]]
    }
    return wrongCopy
  }

  console.log(broken("1"), "0");
  console.log(broken("10000000101101111110011001000"), "01111111010010000001100110111");
  console.log(broken("100010"), "011101");