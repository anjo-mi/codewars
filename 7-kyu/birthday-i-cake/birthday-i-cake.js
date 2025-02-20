function cake(x, y){
  const fallen = y.split('').reduce((a,el) => a + el.charCodeAt(0), 0);
  return (fallen * 10) / x > 7 ? 'Fire!' : 'That was close!';
}