 
function countIf(head, p) {
  let current  = head;
  let passed = 0;
  while (current){
    if (p(current.data)) passed++;
    current = current.next;
  }
  return passed;
}