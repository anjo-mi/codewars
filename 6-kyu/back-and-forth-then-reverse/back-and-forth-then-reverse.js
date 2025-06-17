 
function arrange(s) {
  const t = [];
  let start = 0;
  let end = s.length - 1;
  let count = 0;
  while (start <= end) {
    const [first, last] = [s[start], s[end]];
    if (start === end) t.push(first);
    else if (count % 2) t.push(last, first);
    else t.push(first, last);
    start++;
    end--;
    count++;
  }
  return t;
}
​