 
function Node(data) {
  this.data = data;
  this.next = null;
}
​
function Context(first, second) {
  this.first = first;
  this.second = second;
}
​
function alternatingSplit(head) {
  let first = head;
  let second = head?.next || null;
  if (!second) throw new Error('gotta be at least two');
  let curr = head.next.next,c1 = first, c2 = second, count = 0;
  while (curr){
    if (!(count % 2)) {
      c1.next = curr;
      c1 = c1.next;
    }else{
      c2.next = curr;
      c2 = c2.next;
    }
    curr = curr.next;
    count++;
  }
  if (c1.next === c2) c1.next = null;
  if (c2.next === c1) c2.next = null;
  return new Context(first,second);
}