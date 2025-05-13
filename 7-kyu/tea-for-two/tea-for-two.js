function tea42(input) {
  if (typeof input !== 'string'){
    input = input.toString();
  }
  return input.replaceAll('2', 't');
};