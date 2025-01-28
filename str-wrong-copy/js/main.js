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