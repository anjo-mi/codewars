function mormons(start, reach, tar) {
  if (start >= tar) return 0;
  const newStart = start + (start * reach);
  return 1 + mormons(newStart,reach,tar);
}