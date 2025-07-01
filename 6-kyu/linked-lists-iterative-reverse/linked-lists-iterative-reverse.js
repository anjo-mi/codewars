 
function Node(data) {
  this.data = data;
  this.next = null;
}
​
function reverse(list) {
  if (!list) return null;
  let curr = list;
  let prev = null;
  while (curr){
    const newCurr = new Node(curr.data);
    newCurr.next = prev;
    prev = newCurr;
    curr = curr.next;
  }
  list.data = prev.data;
  list.next = prev.next;
  return list;
}