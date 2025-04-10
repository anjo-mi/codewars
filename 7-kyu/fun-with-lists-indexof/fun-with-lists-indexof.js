 
function indexOf(head, val) {
  let index = 0;
  let current = head;
  while (current){
    if (current.data === val) return index;
    current = current.next;
    index++;
  }
  return -1;
}