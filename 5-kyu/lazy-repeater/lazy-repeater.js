 
function makeLooper(str) {
  let i = -1;
  let key = str;
  return () => {
    i = i + 1 >= key.length ? 0 : i + 1;
    return key[i];
  }
}