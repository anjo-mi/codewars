 
function Node(data) {
  this.data = data;
  this.next = null;
}
​
function append(listA, listB) {
  if( !listA ) return listB;
  if( !listB ) return listA;
  const head = listA;
  let curr = head;
  let prev = head;
  while (curr){
    prev = curr;
    curr = curr.next;
  }
  prev.next = listB;
  return head;
}