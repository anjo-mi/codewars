 
function Node(data) {
  this.data = data;
  this.next = null;
}
​
function insertNth(head, index, data) {
  const node = new Node(data);
  if (index === 0){
    node.next = head;
    return node;
  }
  let current = head;
  let i = 0;
  while (current && i < index - 1){
    current = current.next;
    i++;
  }
  if (!current) throw new Error('stay in bounds');
  node.next = current.next;
  current.next = node;
  return head;
}