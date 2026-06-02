 
function filter(head, p) {
  let curr = head,
      prev = null;
  while (curr){
    if (p(curr.data)){
      prev = curr;
      curr = curr.next;
    }else{
      if (prev) prev.next = curr.next;
      else{
        head = head.next;
      }
      curr = curr.next;
    }
  }
  return head;
}