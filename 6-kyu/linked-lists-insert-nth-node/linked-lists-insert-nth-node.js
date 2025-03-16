 
function Node(data) {
  this.data = data;
  this.next = null;
}
​
function insertNth(head, i, data) {
  const node = new Node(data);
  if (i === 0){
    node.next = head;
    return node;
  }
  let current = head;
  let index = 0;
  while (current && index < i-1){
    current = current.next;
    index++;
  }
  if (!current) throw new Error('invalid index')
  node.next = current.next;
  current.next = node;
  return head;
}