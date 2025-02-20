function cake(x, y){
  const alpha = ' abcdefghijklmnopqrstuvwxyz'
  const fallen = y.split('').reduce((a,el,i) => {
    if (i % 2 === 0) a += el.charCodeAt(0);
    else a += alpha.indexOf(el);
    return a;
  }, 0);
  return (fallen * 10) / x >= 7 ? 'Fire!' : 'That was close!';
}
