function trim(str, size) {
  if (str.length <= size) return str;
  return size <= 3 ? str.slice(0,size) + '...' : str.slice(0, size - 3) + '...';
}
