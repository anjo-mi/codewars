function Node(data) {
  this.data = data;
  this.next = null;
}
​
function Context(source, dest) {
  this.source = source;
  this.dest = dest;
}
​
function moveNode(source, dest) {
  if (!source) throw new Error('at least one of your lists is empty');
  const head = source;
  const next = head?.next;
  head.next = dest;
  return new Context(next, head);
}