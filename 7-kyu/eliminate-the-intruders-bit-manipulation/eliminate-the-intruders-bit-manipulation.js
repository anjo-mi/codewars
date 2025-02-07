function eliminateUnsetBits(num) {
  num = num.replaceAll('0', '');
  if (!num) return 0;
  return parseInt(num,2);
}