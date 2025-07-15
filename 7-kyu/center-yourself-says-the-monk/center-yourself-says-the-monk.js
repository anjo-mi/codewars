 
function center (s, l, fill = ' ') {
  if (s.length >= l) return s;
  const start = Math.ceil( (l - s.length) / 2 );
  const end = Math.floor( (l - s.length) / 2 );
  return fill.repeat(start) + s + fill.repeat(end);
}