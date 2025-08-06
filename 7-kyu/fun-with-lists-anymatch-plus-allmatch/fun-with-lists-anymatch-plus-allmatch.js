 
function anyMatch(head, p) {
  if (!head) return false;
  if (p(head.data)) return true;
  return anyMatch(head.next, p);
}
​
function allMatch(head, p) {
  if (!head) return true;
  if (!p(head.data)) return false;
  return allMatch(head.next, p);
}