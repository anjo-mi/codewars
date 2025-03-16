 
function Node(data) {
  this.data = data;
  this.next = null;
}
​
function push(head, data) {
  const node = new Node(data);
  node.next = head;
  return node;
}
​
function buildOneTwoThree() {
  let num = 3;
  let head = null;
  while (num > 0){
    const node = new Node(num);
    node.next = head;
    head = node;
    num--;
  }
  return head;
}