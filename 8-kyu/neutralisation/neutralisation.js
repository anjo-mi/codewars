function neutralise(s1, s2) {
  let combo = '';
  for (let i = 0 ; i < s1.length ; i++){
    if (s1[i] === s2[i]) combo += s1[i];
    else combo += '0';
  }
  return combo;
}