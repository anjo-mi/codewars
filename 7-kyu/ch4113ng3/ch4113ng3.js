function nerdify(txt){
  const translate = {
    a: 4,
    A: 4,
    E: 3,
    e: 3,
    l: 1,
  }
  let ret = '';
  for (let i of txt){
    ret += translate[i] || i;
  }
  return ret;
}