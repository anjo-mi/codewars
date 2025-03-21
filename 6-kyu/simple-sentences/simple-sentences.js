function makeSentence(parts) {
  let joined = parts.join(' ').replaceAll(' ,', ',').replaceAll(' .','.') + '.';
  while (joined.endsWith('..')){
    joined = joined.replaceAll('..','.');
  }
  return joined;
}