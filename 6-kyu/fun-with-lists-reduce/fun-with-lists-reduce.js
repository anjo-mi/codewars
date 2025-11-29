 
function reduce(head, f, val) {
  let curr = head;
  while (curr){
    val = f(val,curr.data);
    curr = curr.next;
  }
  return val;
}