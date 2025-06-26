 
function map(head, f) {
  if (!head) return null;
  const mappedHead = new Node(f(head.data));
  let currMap = mappedHead;
  let curr = head.next;
  while (curr){
    currMap.next = new Node(f(curr.data));
    currMap = currMap.next;
    curr = curr.next;
  }
  return mappedHead;
}