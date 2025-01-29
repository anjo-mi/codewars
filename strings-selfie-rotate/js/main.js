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