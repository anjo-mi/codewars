 
function Node(data) {
  this.data = data;
  this.next = null;
}
​
function length(head) {
  if (!head) return 0;
  let depth = 1;
  let current = head;
  while (current.next){
    current = current.next;
    depth++;
  }
  return depth;
}
​
function count(head, data) {
  let current = head;
  let num = 0;
  while (current){
    if (current.data === data) num++;
    current = current.next;
  }
  return num;
}