 
function Node(data) {
  this.data = data;
  this.next = null;
}
​
function sortedInsert(head, data) {
  const newbie = new Node(data);
  if (!head){
    head = newbie;
    return head;
  }
  let current = head;
  if (newbie.data < current.data){
    newbie.next = current;
    head = newbie;
    return head;
  }
  while (current.next && current.next.data < newbie.data){
    current = current.next;
  }
  if (!current.next){
    current.next = newbie;
    return head;
  }
  newbie.next = current.next;
  current.next = newbie;
  return head;
}