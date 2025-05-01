function addArrays(a1, a2) {
  if (a1.length !== a2.length) throw new Error('arrays are of different lengths!');
  return a1.map((el,i) => el + a2[i]);
}